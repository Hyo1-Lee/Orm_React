import React from "react";

// 리덕스 스토어의 전역 대이터 todoCount 값을 subscribe 하여 전역 데이터 바인딩
import { useSelector } from "react-redux";

const Counter = () => {
	// useSelector 훅은 store 저장소에 접근하기 위함
	// state 는 전역 저장소 공간에 있는 전체 globalState를 말함
	// 전역 공간에 특정 업무에 관련된 전역 데이터 접근은 관련 리듀서 함수와 리듀서 함수에서 관리하는 데이터구조를 이용하여 접근
	const todoCount = useSelector((state) => state.Todo.todoCount);
	return (
		<div>
			<h1>할 일 {todoCount}건</h1>
		</div>
	);
};

export default Counter;
