import {
    call,
    cancel,
    fork,
    put,
    select,
    take
} from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { Task } from 'redux-saga';

import Exceptions from '~/constants/Exceptions';
import axios from '~/libs/axios';
import { RootReducerState } from '~/modules';
import { groupsAction } from '~/modules/GroupsModule';
import Group, { isGroupList } from '~/types/api/response/Group';
import { isPaginationResponse } from '~/types/api/response/Pagination';

// 그룹 리스트 api 호출
export const fetchGroupsApi = (
    last: null | number
): ReturnType<typeof axios.get> => {
    const params = {
        last
    };

    return axios.get(`/groups`, { params });
};

/**
 * 그룹 리스트 조회 saga
 *
 * @yields
 */
function* fetchGroupsSaga() {
    yield* callFetchGroupsApi(null);
}

/**
 * 그룹 리스트 더보기 saga
 *
 * @yields
 */
function* fetchMoreGroupsSaga() {
    const { last } = yield select(({ groupsReducer }: RootReducerState) => ({
        last: groupsReducer.meta.last
    }));

    yield* callFetchGroupsApi(last);
}

// 그룹 리스트 saga
/**
 * @param last
 * @yields
 */
function* callFetchGroupsApi(last: number | null) {
    try {
        const response: AxiosResponse<unknown>['data'] = yield call(
            fetchGroupsApi,
            last
        );

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
