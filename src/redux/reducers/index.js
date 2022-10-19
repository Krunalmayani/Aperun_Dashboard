import { combineReducers } from "redux";

import authReducer from "./authReducer"
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
    user: authReducer,
    tokenHistory:historyReducer

});

export default rootReducer;