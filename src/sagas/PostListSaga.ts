import {
    call,
    cancel,
    fork,
    put,
    select,
    take
} from '@redux-saga/core/effects';
import { Task } from 'redux-saga';

import { isPaginationResponse } from 'types/api/response/Pagination';
import Post, { isPostList } from 'types/api/response/Post';

import axios from 'libs/axios';

import Exceptions from 'constants/Exceptions';

import { RootReducerState } from 'modules';
import { groupsAction } from 'modules/GroupsModule';
import { postListAction } from 'modules/PostListModule';

/**
 * 게시글 리스트 api 호출
 * @param last
 * @param group
 */
export const fetchPostListApi = (
    last: number | null,
    group: number | null
): Promise<unknown> => {
    const params = {
        last,
        group
    };

    return axios.get('/posts', { params });
};

/**
 * 게시글 리스트 조회 saga
 * @param group
 */
function* fetchPostListSaga(group) {
    yield* callFetchPostListApi(null, group);
}

/**
 * 게시글 리스트 더보기 saga
 */
function* fetchMorePostListSaga() {
    const { last, group } = yield select(
        ({ postListReducer }: RootReducerState) => ({
            last: postListReducer.meta.last,
            group: postListReducer.group
        })
    );

    yield* callFetchPostListApi(last, group);
}

/**
 * 게시글 조회 api 호출
 * @param last
 * @param group
 */
function* callFetchPostListApi(last, group): Generator {
    try {
        const response = yield call(fetchPostListApi, last, group);

        // post list 데이터 검증
        if (!isPaginationResponse<Post[]>(response, isPostList)) {
            throw new Error(Exceptions.NOT_MATCH_EXCEPTION);
        }

        const { data, more } = response;
        yield put(postListAction.fetchPostListSuccess(data, more));
    } catch (error) {
        const message =
            error instanceof Error ? error.message : Exceptions.ERROR;
        yield put(postListAction.fetchPostListError(message));
    }
}

export function* PostListSaga(): Generator {
    while (true) {
        const { type, payload } = (yield take([
            postListAction.fetchPostList.type,
            postListAction.fetchMorePostList.type
        ])) as ReturnType<
            | typeof postListAction.fetchPostList
            | typeof postListAction.fetchMorePostList
        >;

        let fetchGroupTask: null | Task = null;
        switch (type) {
            // 게시글 리스트 조회
            case postListAction.fetchPostList.type:
                fetchGroupTask = (yield fork(
                    fetchPostListSaga,
                    payload
                )) as Task;
                break;
            // 게시글 리스트 더보기
            case postListAction.fetchMorePostList.type:
                fetchGroupTask = (yield fork(fetchMorePostListSaga)) as Task;
                break;
        }

        yield take([
            groupsAction.fetchGroupsSuccess.type,
            groupsAction.fetchGroupsError.type,
            groupsAction.clearGroups.type
        ]);

        // 기존 task 종료
        if (fetchGroupTask !== null) {
            yield cancel(fetchGroupTask);
        }
    }
}
