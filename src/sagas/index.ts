import { all, call } from 'redux-saga/effects';

import { GroupsSaga } from 'sagas/GroupsSaga';
import { PostListSaga } from 'sagas/PostListSaga';

// root saga
export function* rootSaga(): Generator {
    yield all([call(GroupsSaga), call(PostListSaga)]);
}
