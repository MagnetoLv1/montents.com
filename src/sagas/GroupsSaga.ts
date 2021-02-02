import {
    call,
    cancel,
    fork,
    put,
    select,
    take
} from '@redux-saga/core/effects';
import { Task } from 'redux-saga';

import Group, { isGroupList } from 'types/api/response/Group';
import { isPaginationResponse } from 'types/api/response/Pagination';

import axios from 'libs/axios';

import Exceptions from 'constants/Exceptions';

import { RootReducerState } from 'modules';
import { groupsAction } from 'modules/GroupsModule';

// 그룹 리스트 api 호출
export const fetchGroupsApi = (last: null | number): Promise<unknown> => {
    const params = {
        last
    };

    return axios.get(`/groups`, { params });
};

/**
 * 그룹 리스트 조회 saga
 */
function* fetchGroupsSaga() {
    yield* callFetchGroupsApi(null);
}

/**
 * 그룹 리스트 더보기 saga
 */
function* fetchMoreGroupsSaga() {
    const { last } = yield select(({ groupsReducer }: RootReducerState) => ({
        last: groupsReducer.meta.last
    }));

    yield* callFetchGroupsApi(last);
}

// 그룹 리스트 saga
function* callFetchGroupsApi(last: number | null) {
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
        const { type } = (yield take([
            groupsAction.fetchGroups.type,
            groupsAction.fetchMoreGroups.type
        ])) as ReturnType<
            | typeof groupsAction.fetchGroups
            | typeof groupsAction.fetchMoreGroups
        >;

        let fetchGroupTask: null | Task = null;
        switch (type) {
            // 그룹 리스트 조회
            case groupsAction.fetchGroups.type:
                fetchGroupTask = (yield fork(fetchGroupsSaga)) as Task;
                break;
            // 그룹 리스트 더보기
            case groupsAction.fetchMoreGroups.type:
                fetchGroupTask = (yield fork(fetchMoreGroupsSaga)) as Task;
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
