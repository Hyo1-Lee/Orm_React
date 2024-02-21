import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoTemplate from "./TodoTemplate";
import TodoRegist from "./TodoRegist";
import TodoList from "./TodoList";

function App() {
	// 할일 목록 데이터 구조 정의 및 초기값 할당하기
	// 풀스택 개발자 되기 할일 목록 데이터 정의
	const [todos, setTodos] = useState([
		{ id: 1, text: "백엔드 기술 습득하기", desc: "node.js, express, mvc", checked: false },
		{
			id: 2,
			text: "프론트엔드 기술 습득하기",
			desc: "react.js, redux, context",
			checked: false,
		},
		{
			id: 3,
			text: "데이터베이스 기술 습득하기",
			desc: "mysql, mongodb, redis",
			checked: false,
		},
		{ id: 4, text: "운영체제 기술 습득하기", desc: "linux, windows, macos", checked: false },
		{ id: 5, text: "네트워크 기술 습득하기", desc: "tcp/ip, http, https", checked: false },
	]);

	// 할일 고유번호 데이터 정의 및 초기값 할당 - 원시타입 정의
	const [nextId, setNextId] = useState(4);

	// 할일 등록 자리 이벤트 처리함수 정의
	// 처리해야 할 데이터가 존재하는 컴포넌트에서 이벤트처리함수를 정의하고 자식요소로 props를 통해 전달할 수 있다.
	// 자식요소에서는 전달된 이벤트 함수를 실행시킬 수 있고 해당함수는 결국 부모 컴포넌트의 데이터를 변경하게 된다.
	const onInsert = (text, desc) => {
		// setTodos(...todos, { id: nextId, text, desc, checked: false });
		setTodos(todos.concat({ id: nextId, text, desc, checked: false }));
		setNextId(nextId + 1);
	};

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // 할일 선택 이벤트 처리함수 정의
  // 선택된 할일의 checked 속성값을 반전시키는 이벤트 처리함수 정의
  // 선택된 할일의 checked 속성값을 반전시키기 위해 map 함수를 사용하여 반복처리하고
  // 선택된 할일의 checked 속성값을 반전시킨다.
  const onSelect = (id) => {
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, checked: !todo.checked} : todo));
  }

	return (
		<div className="App">
			<h1>할 일 개수: {todos.length} 개</h1>
			<TodoTemplate>
				{/* 부모에서 정의된 함수(이벤트 핸들러 함수)도 props 방식으로 자식요소에 전달이 가능하다. */}
				<TodoRegist onInsert={onInsert}></TodoRegist>
				<TodoList todos={todos} onRemove={onRemove} onSelect={onSelect}></TodoList>
			</TodoTemplate>
		</div>
	);
}

export default App;
