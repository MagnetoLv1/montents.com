import { combineReducers } from 'redux';

import { PostReducer } from 'modules/PostModule';
import { PostsReducer } from 'modules/PostsModule';

// root reducer
export default combineReducers({
    PostsReducer,
    PostReducer
});
