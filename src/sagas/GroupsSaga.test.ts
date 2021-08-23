import { delay } from '@choseohwan/utils';
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { dynamic, throwError } from 'redux-saga-test-plan/providers';

import Exceptions from '~/constants/Exceptions';
import GroupData from '~/data/groups/get_1.json';
import AxiosResponseError from '~/errors/AxiosResponseError';
import { rootReducer } from '~/modules';
import { groupsAction } from '~/modules/GroupsModule';
import { fetchGroupsApi, GroupsSaga } from '~/sagas/GroupsSaga';

describe('Sagas | GroupSaga', () => {
    it('그룹 리스트 조회 성공', async () => {
        // 그룹 리스트 조회
        await expectSaga(GroupsSaga)
            .withReducer(rootReducer)
            .provide([[call.fn(fetchGroupsApi), GroupData]])
            .put(
                groupsAction.fetchGroupsSuccess(GroupData.data, GroupData.more)
            )
            .dispatch(groupsAction.fetchGroups())
            .silentRun();

        // 그룹 리스트 더보기
        await expectSaga(GroupsSaga)
            .withReducer(rootReducer)
            .provide([[call.fn(fetchGroupsApi), GroupData]])
            .put(
                groupsAction.fetchGroupsSuccess(GroupData.data, GroupData.more)
            )
            .dispatch(groupsAction.fetchMoreGroups())
            .silentRun();
    });

    it('그룹 리스트 조회 중 재조회', async () => {
        let called = 0;

        // 그룹 조회 딜레이 함수 (0.1s)
        const delayedFetch = async () => {
            called++;
            await delay(100);
            return GroupData;
        };

        // 테스트 프로세스 생성
        const testSaga = expectSaga(GroupsSaga);
        testSaga.withReducer(rootReducer);

        // api 함수 mocking
        testSaga.provide([[call.fn(fetchGroupsApi), dynamic(delayedFetch)]]);

        // 첫번쨰 그룹 리스트 조회
        testSaga.dispatch(groupsAction.fetchGroups());

        // 테스트 프로세스 실행
        const runningTask = testSaga.silentRun(300);

        // 로딩 중 다음 그룹 조회
        await delay(50);
        testSaga.dispatch(groupsAction.fetchMoreGroups());

        // 테스트 프로세스 정상 동작 체크
        await runningTask;

        // api 조회가 한번만 됐는지 확인
        await expect(called).toBe(1);
    });

    it('그룹 리스트 api 구조 변경', async () => {
        const mockingData = {
            ...GroupData,
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

        await expectSaga(GroupsSaga)
            .provide([[call.fn(fetchGroupsApi), mockingData]])
            .put(groupsAction.fetchGroupsError(Exceptions.NOT_MATCH_EXCEPTION))
            .dispatch(groupsAction.fetchGroups())
            .silentRun();
    });

    it('그룹 리스트 조회 실패', async () => {
        const axiosError = new AxiosResponseError(
            '그룹 리스트 조회 중 오류 발생'
        );

        await expectSaga(GroupsSaga)
            .provide([[call.fn(fetchGroupsApi), throwError(axiosError)]])
            .put(groupsAction.fetchGroupsError(axiosError.message))
            .dispatch(groupsAction.fetchGroups())
            .silentRun();
    });
});
