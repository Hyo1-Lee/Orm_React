import { ACTIVE_TAB } from "../../constants/actionType";
export const ActiveTab = (tab) => {
	return {
		type: ACTIVE_TAB,
		payload: tab,
	};
};
