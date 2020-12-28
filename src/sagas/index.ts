import { all, call } from 'redux-saga/effects';

import { GroupsSaga } from 'sagas/GroupsSaga';

// root saga
export function* rootSaga(): Generator {
    yield all([call(GroupsSaga)]);
}
