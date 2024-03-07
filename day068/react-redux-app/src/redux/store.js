// store 구성을 위한 추가 패키지 설치
// yarn add @reduxjs/toolkit -D
// redux 기반 store 환경을 쉽게 구성해주기 위한 추가 패키지 설치 필요

// @reduxjs/toolkit 패키지에서 제공하는 configureStore 함수를 사용하여 store를 구성
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
	reducer: reducers,
	// devTools: process.env.NODE_ENV !== "production",
	devTools: true,
});

export default store;
