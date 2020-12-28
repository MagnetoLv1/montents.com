import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import AxiosResponseError from 'errors/AxiosResponseError';

import GroupData from 'data/groups/get_1.json';

import Exceptions from 'constants/Exceptions';

import { groupsAction } from 'modules/GroupsModule';

import { fetchGroupsApi, GroupsSaga } from 'sagas/GroupsSaga';

describe('Sagas | GroupSaga', () => {
    it('그룹 리스트 조회 성공', async () => {
        await expectSaga(GroupsSaga)
            .provide([[call.fn(fetchGroupsApi), GroupData]])
            .put(
                groupsAction.fetchGroupsSuccess(GroupData.data, GroupData.more)
            )
            .dispatch(groupsAction.fetchGroups(null))
            .run();
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
            .dispatch(groupsAction.fetchGroups(null))
            .run();
    });

    it('그룹 리스트 조회 실패', async () => {
        const axiosError = new AxiosResponseError(
            '그룹 리스트 조회 중 오류 발생'
        );

        await expectSaga(GroupsSaga)
            .provide([[call.fn(fetchGroupsApi), throwError(axiosError)]])
            .put(groupsAction.fetchGroupsError(axiosError.message))
            .dispatch(groupsAction.fetchGroups(null))
            .run();
    });
});
