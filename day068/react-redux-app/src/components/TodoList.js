import React, { useState } from "react";

// redux 전역 데이터 공간에 데이터를 반영하려면 useDispatch 훅을 사용하여 dispatch 함수를 호출해야 함
import { useDispatch } from "react-redux";

// 전역 공간에 데이터를 반영하기 위해 action 함수를 참조해야 함
import { addTodoCount } from "../redux/actions";

const TodoList = () => {
	// 전역 데이터 반영을 위한 useDispatch 훅 변수 생성
	const dispatch = useDispatch();

	const [todos, setTodos] = useState({ title: "", orderby: 0 });
	const [todoList, setTodoList] = useState([]);

	const handleTodo = (e) => {
		const { name, value } = e.target;
		setTodos({ ...todos, [name]: value });
	};

	const handleAddTodo = () => {
		setTodoList([...todoList, todos]);
		setTodos({ title: "", orderby: 0 });

		// 전역 데이터 공간에 총 할 일 전역 데이터 반영
		dispatch(addTodoCount(todoList.length + 1));
	};

	const handleDelete = (index) => {
		const newTodoList = todoList.filter((todo, i) => i !== index);
		setTodoList(newTodoList);
		dispatch(addTodoCount(newTodoList.length));
	};

	return (
		<div>
			할일: <input name="title" value={todos.title} onChange={handleTodo} />
			<br />
			우선순위: {""}
			<input name="orderby" value={todos.orderby} onChange={handleTodo} />
			<br />
			<button onClick={handleAddTodo}>추가</button>
			<hr></hr>
			<ul>
				{todoList.map((todo, index) => (
					<li key={index}>
						{todo.orderby}: {todo.title}
						<button onClick={() => handleDelete(index)}>삭제</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
