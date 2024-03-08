// redux-saga 주요 헬퍼함수 참조하기
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { APIClient } from "../../helpers/apiClient";
import { USER_LOGIN, API_FAILED } from "../../constants/actionTypes";

import { userLogin, apiError } from "./actions";

const create = new APIClient().create();

// 로그인 백엔드 통신 처리를 위한 제너레이터 함수 정의
// 로그인 처리 SAGA 제너레이터 함수
function* login({ payload: { email, password, navigate } }) {
	try {
		const response = yield call(create, "api/member/login", { email, password });
		localStorage.setItem("authUser", response.data.loginUser);
		localStorage.setItem("authToken", response.data.token);
		yield put(
			userLogin({
				token: response.data.token,
				loginUser: response.data.loginUser,
			})
		);
		navigate("/dashboard");
	} catch (error) {
		yield put(apiError(error));
	}
}

export function* watchLoginUser() {
	yield takeEvery(USER_LOGIN, login);
}

function* authSaga() {
	yield all([fork(watchLoginUser)]);
}

export default authSaga;
