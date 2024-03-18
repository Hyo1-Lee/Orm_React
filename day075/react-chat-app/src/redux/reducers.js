import { combineReducers } from "redux";

import { Auth, Logout } from "./Auth/reducer";
import { Layout } from "./Layouts/reducer";
import { Chat } from "./Chat/reducer";
export default combineReducers({ Auth, Logout, Layout, Chat });
