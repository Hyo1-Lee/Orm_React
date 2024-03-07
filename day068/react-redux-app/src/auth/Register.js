import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
		name: "",
	});
	const navigate = useNavigate();

	const onEntry = (e) => {
		// 프론트엔드 데이터 바인딩 속성과 벡엔드 RESTFul 전달데이터 구조와 속성명이 다를 경우
		// 아래와 같이 백엔드 수신 데이터 구조에 맞춰서 데이터를 가공해서 전달해야 한다.
		const entryData = {
			email: user.email,
			password: user.password,
			name: user.name,
		};

		axios
			.post("http://localhost:3005/api/member/entry", user)
			.then((res) => {
				console.log(res);
				navigate("/login");
			})
			.catch((err) => {
				console.log(err);
			});
		e.preventDefault();
	};

	const onChangeEntry = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<form onSubmit={onEntry}>
				메일주소:
				<input type="text" name="email" value={user.email} onChange={onChangeEntry} />
				<br />
				비밀번호:
				<input
					type="password"
					name="password"
					value={user.password}
					onChange={onChangeEntry}
				/>
				<br />
				이름:
				<input type="text" name="name" value={user.name} onChange={onChangeEntry} />
				<br />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
};

export default Register;
