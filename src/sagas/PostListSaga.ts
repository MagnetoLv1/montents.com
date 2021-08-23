import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import Exceptions from '~/constants/Exceptions';
import axios from '~/libs/axios';
import { RootReducerState } from '~/modules';
import { postListAction } from '~/modules/PostListModule';
import { isPaginationResponse } from '~/types/api/response/Pagination';
import Post, { isPostList } from '~/types/api/response/Post';

type fetchPostListActionType = ReturnType<
    | typeof postListAction.fetchPostList
    | typeof postListAction.fetchMorePostList
>;

/**
 * 게시글 리스트 api 호출
 *
 * @param last
 * @param group
 */
export const fetchPostListApi = (
    last: number | null,
    group: number | null
): ReturnType<typeof axios.get> => {
    const params = {
        last,
        group
    };

    return axios.get('/posts', { params });
};

/**
 * 게시글 조회 saga
 *
 * @param params
 * @param params.type
 * @param params.payload
 * @yields
 */
function* fetchPostListSaga({ type, payload }: fetchPostListActionType) {
    let last: number | null = null,
        group: number | null = null;

    switch (type) {
        // 게시글 조회
        case postListAction.fetchPostList.type:
            group = payload as ReturnType<
                typeof postListAction.fetchPostList
            >['payload'];
            break;

        // 게시글 더보기 조회
        case postListAction.fetchMorePostList.type:
            [
                last,
                group
            ] = yield select(({ postListReducer }: RootReducerState) => [
                postListReducer.meta.last,
                postListReducer.group
            ]);
    }

    try {
        const response: AxiosResponse<unknown>['data'] = yield call(
            fetchPostListApi,
            last,
            group
        );

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
    yield takeLatest<fetchPostListActionType>(
        [
            postListAction.fetchPostList.type,
            postListAction.fetchMorePostList.type
        ],
        fetchPostListSaga
    );
}
