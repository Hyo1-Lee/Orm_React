import { USER_LOGIN, API_FAILED } from "../../constants/actionTypes";
export const userLogin = (user) => {
	return {
		type: USER_LOGIN,
		payload: user,
	};
};

export const apiError = (error) => ({
	type: API_FAILED,
	payload: error,
});
