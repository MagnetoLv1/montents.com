import { call, fork, put, take } from '@redux-saga/core/effects';

import axios from 'libs/axios';

import { isPaginationResponse } from 'types/IPaginationResponse';
import { isGroup } from 'types/response/IGroup';

import { isDev } from 'constants/env';
import Exceptions from 'constants/Exceptions';

import { GroupsAction } from 'modules/GroupsModule';

// 그룹 리스트 api 호출
function fetchGroupsApi(last: null | number) {
    const params = {
        last: last ? last : 1
    };
    return axios.get(`/groups`, { params });
}

// 그룹 리스트 saga
function* fetchGroupsSaga(last: null | number) {
    try {
        const response = yield call(fetchGroupsApi, last);

        if (!isPaginationResponse(response) || !response.data.every(isGroup)) {
            throw new Error(
                isDev ? Exceptions.NOT_MATCH_EXCEPTION : Exceptions.ERROR
            );
        }

        const { data, more } = response;

        yield put(GroupsAction.fetchGroupsSuccess(data, more));
    } catch (error) {
        yield put(GroupsAction.fetchGroupsError(error.message));
    }
}

export function* GroupsSaga() {
    while (true) {
        const { payload } = yield take(GroupsAction.fetchGroups.type);
        yield fork(fetchGroupsSaga, payload);

        yield take([
            GroupsAction.fetchGroupsSuccess.type,
            GroupsAction.fetchGroupsError.type,
            GroupsAction.clearGroups.type
        ]);
    }
}
