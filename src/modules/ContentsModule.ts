import { truncateSync } from 'fs';
import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

import IPagination, { ILastEvaluatedKey } from 'types/IPagination';
import IGroup from 'types/response/IGroup';

import ApiStatus from 'constants/ApiStatus';

type TContentsModule = IPagination<IGroup[]>;

const initMeta = {
    more: false,
    last: null,
    LastEvaluatedKey: null
};

const initState: TContentsModule = {
    data: [],
    status: ApiStatus.CLEAR,
    error: null,
    meta: initMeta
};

class ContentsModule extends ImmerReducer<TContentsModule> {
    /**
     * 그릅 리스트 조회
     * @param last
     */
    public fetchContents(lastEvaluatedKey: AWS.DynamoDB.Key) {
        this.draftState.status =
            lastEvaluatedKey === null
                ? ApiStatus.LOADING
                : ApiStatus.MORE_LOADING;
    }

    /**
     * 그룹 리스트 조회 성공
     * @param data
     * @param more
     */
    public fetchContentsSuccess(
        data: IGroup[],
        lastEvaluatedKey: AWS.DynamoDB.Key
    ) {
        console.log('fetchContentsSuccess');
        this.draftState.status = ApiStatus.SUCCESS;
        this.draftState.data = this.draftState.data.concat(data);
        this.draftState.meta = {
            more: true,
            last: 0,
            LastEvaluatedKey: lastEvaluatedKey
        };
    }

    /**
     * 그룹 리스트 조회 실패
     * @param error
     */
    public fetchContentsError(error: string) {
        this.draftState = { ...initState };
        this.draftState.status = ApiStatus.ERROR;
        this.draftState.error = error;
    }

    /**
     * 그룹 리스트 초기화
     */
    public clearContents() {
        this.draftState = initState;
    }
}

export const ContentsReducer = createReducerFunction(ContentsModule, initState);
export const ContentsAction = createActionCreators(ContentsModule);
