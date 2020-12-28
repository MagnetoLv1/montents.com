import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import PaginationModule from 'types/api/PaginationModule';
import Group from 'types/api/response/Group';

import ApiStatus from 'constants/ApiStatus';

interface GroupsModuleState extends PaginationModule<Group[]> {}

const initialState: GroupsModuleState = {
    data: [],
    status: ApiStatus.CLEAR,
    error: null,
    meta: {
        more: false,
        last: null
    }
};

class GroupsModule extends ImmerReducer<GroupsModuleState> {
    /**
     * 그릅 리스트 조회
     * @param last
     */
    public fetchGroups(last: number | null): void {
        this.draftState.status =
            last === null || last <= 0
                ? ApiStatus.LOADING
                : ApiStatus.MORE_LOADING;
    }

    /**
     * 그룹 리스트 조회 성공
     * @param data
     * @param more
     */
    public fetchGroupsSuccess(data: Group[], more: boolean): void {
        this.draftState.status = ApiStatus.SUCCESS;
        this.draftState.data = this.draftState.data.concat(data);

        this.draftState.meta = {
            more,
            last: data.length === 0 ? null : data[data.length - 1].idx
        };
    }

    /**
     * 그룹 리스트 조회 실패
     * @param error
     */
    public fetchGroupsError(error: string): void {
        this.draftState = { ...initialState };
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.error = error;
    }

    /**
     * 그룹 리스트 초기화
     */
    public clearGroups(): void {
        this.draftState = initialState;
    }
}

export const groupsReducer = createReducerFunction(GroupsModule, initialState);
export const groupsAction = createActionCreators(GroupsModule);
