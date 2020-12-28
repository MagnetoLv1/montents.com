import { call, cancel, fork, put, take } from '@redux-saga/core/effects';
import { Task } from 'redux-saga';

import Group, { isGroupList } from 'types/api/response/Group';
import { isPaginationResponse } from 'types/api/response/Pagination';

import axios from 'libs/axios';

import Exceptions from 'constants/Exceptions';

import { groupsAction } from 'modules/GroupsModule';

// 그룹 리스트 api 호출
export const fetchGroupsApi = (last: null | number): Promise<unknown> => {
    const params = {
        last
    };

    return axios.get(`/groups`, { params });
};

// 그룹 리스트 saga
function* fetchGroupsSaga(last: null | number) {
    try {
        const response = yield call(fetchGroupsApi, last);

        // 그룹리스트 데이터가 아닌 경우 에러 발생
        if (!isPaginationResponse<Group[]>(response, isGroupList)) {
            throw new Error(Exceptions.NOT_MATCH_EXCEPTION);
        }

        const { data, more } = response;
        yield put(groupsAction.fetchGroupsSuccess(data, more));
    } catch (error) {
        const message =
            error instanceof Error ? error.message : Exceptions.ERROR;
        yield put(groupsAction.fetchGroupsError(message));
    }
}

export function* GroupsSaga(): Generator {
    while (true) {
        const { payload } = (yield take(
            groupsAction.fetchGroups.type
        )) as ReturnType<typeof groupsAction.fetchGroups>;
        const fetchGroupTask = (yield fork(fetchGroupsSaga, payload)) as Task;

        yield take([
            groupsAction.fetchGroupsSuccess.type,
            groupsAction.fetchGroupsError.type,
            groupsAction.clearGroups.type
        ]);
        yield cancel(fetchGroupTask);
    }
}
