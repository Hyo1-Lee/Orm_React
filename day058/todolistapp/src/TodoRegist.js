import React, { useState } from "react";

const TodoRegist = ({ onInsert }) => {
    // 단일 할일정보 데이터 구조정의 및 초기값 할당
    const [todo, setTodo] = useState({
        text: "",
        desc: "",
    });

    // 할일 정보 입력시 관련 UI 요소에 바인딩 된 상태 속성값 변경처리 이벤트 처리 함수
    const onTodoChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        //APP.js 컴포넌트에서 props 로 전달된 onInsert 히벤트 처리함수를 호출해 todoList에 데이터 반영
        onInsert(todo.text, todo.desc);
        setTodo({
            text: "",
            desc: "",
        });
        e.preventDefault();
    }

    return (
		<div>
			<form onSubmit={onSubmit}>
                제목: 
                <input name="text" value={todo.text} onChange={onTodoChange}/>
                내용:
                <input name="desc" value={todo.desc} onChange={onTodoChange}/>
                <button type="submit">등록</button>
            </form>
		</div>
	);
};

export default TodoRegist;
