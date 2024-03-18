import { ACTIVE_TAB } from "../../constants/actionType";
export const Layout = (tab) => {
	return {
		type: ACTIVE_TAB,
		payload: tab,
	};
};
