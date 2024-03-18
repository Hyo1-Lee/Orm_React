// ACTIVE_TAB 리듀서 함수
import { ACTIVE_TAB } from "../../constants/actionType";

const INIT_STATE = {
	activeTab: "chat",
	userSidebar: false,
	conversationName: "Doris Brown",
	layoutMode: "light",
};

const Layout = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ACTIVE_TAB:
			return { ...state, activeTab: action.payload };
		default:
			return state;
	}
};

export { Layout };
