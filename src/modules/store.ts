import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'modules/reducer';

import {
    createNewSagaMiddleware,
    runSagaMiddleware,
    sagaMiddleware
} from 'sagas';

export type TStoreState = ReturnType<typeof rootReducer>;

export const initStore = (initialState?: TStoreState) => {
    createNewSagaMiddleware();

    const store: ReturnType<typeof createStore> = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    runSagaMiddleware();

    return store;
};
