import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IApiModule from 'types/IApiModule';
import IGroups from 'types/IGroups';

import ApiStatus from 'constants/ApiStatus';

type TGroupsModule = IApiModule<IGroups[]>;

const initState: TGroupsModule = {
    data: [],
    status: ApiStatus.CLEAR,
    error: null
};

class GroupsModule extends ImmerReducer<TGroupsModule> {
    /**
     * 그릅 리스트 조회
     */
    public fetchGroups() {
        this.draftState.status = ApiStatus.LOADING;
    }

    /**
     * 그룹 리스트 조회 성공
     * @param data
     */
    public fetchGroupsSuccess(data: IGroups[]) {
        this.draftState.status = ApiStatus.SUCCESS;
        this.draftState.data = data;
    }

    /**
     * 그룹 리스트 조회 실패
     * @param error
     */
    public fetchGroupsError(error: string) {
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.error = error;
    }

    /**
     * 그룹 리스트 초기화
     */
    public clearGroups() {
        this.draftState.status = ApiStatus.CLEAR;
    }
}

export const GroupsReducer = createReducerFunction(GroupsModule, initState);
export const GroupsAction = createActionCreators(GroupsModule);
