import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { dynamic, throwError } from 'redux-saga-test-plan/providers';

import AxiosResponseError from 'errors/AxiosResponseError';

import PostListData from 'data/posts/get_1.json';

import { delay } from 'libs/utils';

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

    it('게시글 리스트 조회 중 재조회', async () => {
        let called = 0;

        // 게시글 조회 딜레이 함수 (0.1s)
        const delayedFetch = async () => {
            called++;
            await delay(100);
            return PostListData;
        };

        // 테스트 프로세스 생성
        const testSaga = expectSaga(PostListSaga);
        testSaga.withReducer(rootReducer);

        // api 함수 mocking
        testSaga.provide([[call.fn(fetchPostListApi), dynamic(delayedFetch)]]);

        // 첫번쨰 게시글 리스트 조회
        testSaga.dispatch(postListAction.fetchPostList(null));

        // 테스트 프로세스 실행
        const runningTask = testSaga.silentRun(300);

        // 로딩 중 다음 게시글 조회
        await delay(50);
        testSaga.dispatch(postListAction.fetchMorePostList());

        // 테스트 프로세스 정상 동작 체크
        await runningTask;

        // api 조회가 한번만 됐는지 확인
        await expect(called).toBe(1);
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
