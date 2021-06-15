import {combineReducers} from 'redux'

import authReducer from "./authReducer";
// import responseReducer from "./responseReducer";
export default combineReducers({
    auth:authReducer,
    // response:responseReducer
})