import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// root saga
function* rootSaga() {
    yield all([]);
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
