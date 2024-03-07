// 업무별 폴더에 있는 각종 reducer 파일을 하나로 합치는 역할
// 각종 reducer 파일에서 노출된는 reducer 함수를 하나로 통합

import { combineReducers } from "redux";

import Todo from "./todo/reducer";

import Auth from "./auth/reducer";

export default combineReducers({ Todo, Auth });
