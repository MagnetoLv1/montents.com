import {
    createActionCreators,
    createReducerFunction,
    ImmerReducer
} from 'immer-reducer';

class StoreModule extends ImmerReducer<Record<string, unknown>> {
    /**
     * store state 초기화 시키기 위한 action
     */
    resetStore() {
        return;
    }
}

export const storeReducer = createReducerFunction(StoreModule, {});
export const storeAction = createActionCreators(StoreModule);
