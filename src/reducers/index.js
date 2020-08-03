import { combineReducers } from 'redux';
import login from "./login";
import user from "./user";
import users from "./users";

export default combineReducers({
    login,
    user,
    users
})
