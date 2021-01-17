import { call, put, select, takeLatest } from '@redux-saga/core/effects';

import { isPaginationResponse } from 'types/api/response/Pagination';
import Post, { isPostList } from 'types/api/response/Post';

import axios from 'libs/axios';

import Exceptions from 'constants/Exceptions';

import { RootReducerState } from 'modules';
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
    // 게시글 리스트 조회
    yield takeLatest<ReturnType<typeof postListAction.fetchPostList>>(
        postListAction.fetchPostList.type,
        (payload) => fetchPostListSaga(payload)
    );

    // 게시글 리스트 더 보기
    yield takeLatest<ReturnType<typeof postListAction.fetchMorePostList>>(
        postListAction.fetchMorePostList.type,
        () => fetchMorePostListSaga()
    );
}
