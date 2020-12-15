import { combineReducers } from 'redux';

import { ContentsReducer } from 'modules/ContentsModule';
import { GroupsReducer } from 'modules/GroupsModule';

// root reducer
export default combineReducers({
    GroupsReducer,
    ContentsReducer
});
