// 리덕스 그룹 목록 가져오기
import axios from "axios";
export const getGroupList = () => {
	return (dispatch) => {
		return axios.get("http://localhost:3005/groups").then((res) => {
			dispatch({ type: "GROUPS", payload: res.data });
		});
	};
};
