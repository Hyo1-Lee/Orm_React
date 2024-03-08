// 리덕스 로그인 액션 함수
import { LOGIN_USER, LOGOUT_USER } from "../../constants/actionType";
export const loginUser = (user) => {
	return {
		type: LOGIN_USER,
		payload: user,
	};
};

export const logoutUser = () => {
	return {
		type: LOGOUT_USER,
	};
};
