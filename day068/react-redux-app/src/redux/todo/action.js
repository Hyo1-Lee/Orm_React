import { TODO_COUNT } from "../../constants/actionTypes";

// STEP2: 액션 생성자 함수 정의
// 액션 함수 기본 구조
//(컴포넌트에서 전달되는 데이터) => (액션 객체 정의 (type:액션 타입, payload{리듀서로 전달되는 데이터 구조 : 컴포넌트에서 전달되는 데이터 포함}))
export const addTodoCount = (todoCount) => ({
	type: TODO_COUNT,
	payload: { todoCount },
});
