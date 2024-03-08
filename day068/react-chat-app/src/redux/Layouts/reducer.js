// ACTIVE_TAB 리듀서 함수
import { ACTIVE_TAB } from "../../constants/actionType";

const INIT_STATE = {
	activeTab: "chat",
};

const ActiveTab = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ACTIVE_TAB:
			return { ...state, activeTab: action.payload };
		default:
			return { ...state };
	}
};

export { ActiveTab };
