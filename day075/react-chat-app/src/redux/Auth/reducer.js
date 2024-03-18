// 로그인 리듀서 함수
import { LOGIN_USER, LOGOUT_USER } from "../../constants/actionType";

const INIT_STATE = {
	token: null,
	loginUser: {},
};

const Auth = (state = INIT_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				token: action.payload.token,
				loginUser: action.payload.loginUser,
			};
		default:
			return state;
	}
};

const Logout = (state = INIT_STATE, action) => {
	switch (action.type) {
		case LOGOUT_USER:
			return { ...state, token: null, loginUser: {} };
		default:
			return { ...state };
	}
};

export { Auth, Logout };
