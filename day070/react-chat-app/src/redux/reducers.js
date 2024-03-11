import { combineReducers } from "redux";

import { Auth, Logout } from "./Auth/reducer";
import { ActiveTab } from "./Layouts/reducer";
export default combineReducers({ Auth, Logout, ActiveTab });
