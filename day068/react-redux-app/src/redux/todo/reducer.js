// 해당 리듀서와 관련된 액션 타입 참조
import { TODO_COUNT } from "../../constants/actionTypes";

// 전역 데이터 저장소에 생성할 기본 전역 데이터 구조를 정의하고 초기값 정의
const INIT_STATE = {
	todoCount: 20,
};

// 리듀서 함수 정의, 액션 타입별로 전역 데이터 공간에 데이터 반영
// 리듀서 함수는 해당 업무와 관련된 다양한 액션 타입별로 전역상태를 관리해주는 기능 제공
// 리듀서 함수에 입력 파라미터로 action 타입 객체 전달. action 타입 객체 안에는 화면컴포넌트에서 저낟뢰 대이터가 포함
// 해당 업무 전용 리듀서 함수는 다양한 해당업무 액션타입별로 데이터를 case by case로 관리
// state는 store에 저장된 전체 globalState 내 todo 전용 전역 데이터를 말함
const Todo = (state = INIT_STATE, action) => {
	switch (action.type) {
		case TODO_COUNT:
			return {
				...state,
				todoCount: action.payload.todoCount,
			};
		default:
			return state;
	}
};

export default Todo;
