import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { userRegisterReducer } from "./userReducer";

export default combineReducers({
    sampleData: sampleReducer,
    userInfo: userRegisterReducer,
});