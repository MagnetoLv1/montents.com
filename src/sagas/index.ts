import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { GroupsSaga } from 'sagas/GroupsSaga';

// root saga
function* rootSaga() {
    yield all([fork(GroupsSaga)]);
}

// saga middleware object
export let sagaMiddleware: ReturnType<typeof createSagaMiddleware>;

// saga running task
export let sagaTask: ReturnType<ReturnType<typeof createSagaMiddleware>['run']>;

// create new saga middleware
export const createNewSagaMiddleware = () => {
    sagaMiddleware = createSagaMiddleware();
};

// start saga middleware
export const runSagaMiddleware = () => {
    sagaTask = sagaMiddleware.run(rootSaga);
};
