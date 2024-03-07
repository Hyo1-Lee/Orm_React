import { USER_LOGIN } from "../../constants/actionTypes";
export const userLogin = (user) => {
	return {
		type: USER_LOGIN,
		payload: user,
	};
};
