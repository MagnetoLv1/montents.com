import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import AxiosResponseError from 'errors/AxiosResponseError';

import PostListData from 'data/posts/get_1.json';

import Exceptions from 'constants/Exceptions';

import { rootReducer } from 'modules';
import { postListAction } from 'modules/PostListModule';

import { fetchPostListApi, PostListSaga } from 'sagas/PostListSaga';

describe('Sagas | PostListSaga', () => {
    it('게시글 리스트 조회 성공', async () => {
        // 게시글 리스트 조회
        await expectSaga(PostListSaga)
            .withReducer(rootReducer)
            .provide([[call.fn(fetchPostListApi), PostListData]])
            .put(
                postListAction.fetchPostListSuccess(
                    PostListData.data,
                    PostListData.more
                )
            )
            .dispatch(postListAction.fetchPostList(null))
            .silentRun();

        // 게시글 리스트 더보기
        await expectSaga(PostListSaga)
            .withReducer(rootReducer)
            .provide([[call.fn(fetchPostListApi), PostListData]])
            .put(
                postListAction.fetchPostListSuccess(
                    PostListData.data,
                    PostListData.more
                )
            )
            .dispatch(postListAction.fetchPostList(null))
            .silentRun();
    });

    it('게시글 리스트 api 구조 변경', async () => {
        const mockingData = {
            ...PostListData,
            data: [
                {
                    test1: 'test1',
                    test2: 'test2'
                },
                {
                    test1: 'test1',
                    test2: 'test2'
                },
                {
                    test1: 'test1',
                    test2: 'test2'
                },
                {
                    test1: 'test1',
                    test2: 'test2'
                }
            ]
        };

        await expectSaga(PostListSaga)
            .provide([[call.fn(fetchPostListApi), mockingData]])
            .put(
                postListAction.fetchPostListError(
                    Exceptions.NOT_MATCH_EXCEPTION
                )
            )
            .dispatch(postListAction.fetchPostList(null))
            .silentRun();
    });

    it('게시글 리스트 조회 실패', async () => {
        const axiosError = new AxiosResponseError(
            '게시글 리스트 조회 중 오류 발생'
        );

        await expectSaga(PostListSaga)
            .provide([[call.fn(fetchPostListApi), throwError(axiosError)]])
            .put(postListAction.fetchPostListError(axiosError.message))
            .dispatch(postListAction.fetchPostList(null))
            .silentRun();
    });
});
