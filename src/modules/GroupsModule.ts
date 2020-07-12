import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IPagination from 'types/IPagination';
import IGroup from 'types/response/IGroup';

import ApiStatus from 'constants/ApiStatus';

type TGroupsModule = IPagination<IGroup[]>;

const initMeta = {
    more: false,
    last: null
};

const initState: TGroupsModule = {
    data: [],
    status: ApiStatus.CLEAR,
    error: null,
    meta: initMeta
};

class GroupsModule extends ImmerReducer<TGroupsModule> {
    /**
     * 그릅 리스트 조회
     * @param last
     */
    public fetchGroups(last: number | null) {
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
    public fetchGroupsSuccess(data: IGroup[], more: boolean) {
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
    public fetchGroupsError(error: string) {
        this.draftState = { ...initState };
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.error = error;
    }

    /**
     * 그룹 리스트 초기화
     */
    public clearGroups() {
        this.draftState = initState;
    }
}

export const GroupsReducer = createReducerFunction(GroupsModule, initState);
export const GroupsAction = createActionCreators(GroupsModule);
