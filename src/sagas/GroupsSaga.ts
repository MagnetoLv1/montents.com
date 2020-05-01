import { call, fork, put, take, takeEvery } from '@redux-saga/core/effects';

import axios from 'libs/axios';

import { GroupsAction } from 'modules/GroupsModule';

// 그룹 리스트 api 호출
function fetchGroupsApi() {
    return axios.get(`/groups`);
}

// 그룹 리스트 saga
function* fetchGroupsSaga() {
    try {
        const response = yield call(fetchGroupsApi);

        yield put(GroupsAction.fetchGroupsSuccess(response.data));
    } catch (error) {
        yield put(GroupsAction.fetchGroupsError(error.message));
    }
}

export function* GroupsSaga() {
    while (true) {
        yield take(GroupsAction.fetchGroups.type);
        yield fork(fetchGroupsSaga);

        yield take([
            GroupsAction.fetchGroupsError.type,
            GroupsAction.clearGroups.type
        ]);
    }
}
