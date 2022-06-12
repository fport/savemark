import { combineReducers } from "redux";
import sampleReducer from "./sampleReducer";
import { userRegisterReducer, userLoginReducer } from "./userReducer";

export default combineReducers({
    sampleData: sampleReducer,
    userInfo: userRegisterReducer,
    userInfo: userLoginReducer,
});