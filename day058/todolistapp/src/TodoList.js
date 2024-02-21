import React, { useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemove, onSelect }) => {
	return (
		<div>
			<table style={{margin:'0 auto', width:"50%"}}>
				<thead>
					<tr>
						<th>선택</th>
						<th>ID</th>
						<th>할일</th>
						<th>내용</th>
						<th>삭제</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, i) => (
						<TodoItem
							key={i}
							todo={todo}
							onRemove={onRemove}
							onSelect={onSelect}
						></TodoItem>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;
