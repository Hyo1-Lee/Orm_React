import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions";

const Login = () => {
	const dispatch = useDispatch();
	const [login, setLogin] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const onChangeLogin = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const onLogin = (e) => {
		axios
			.post("http://localhost:3005/api/member/login", login)
			.then((res) => {
				console.log(res.data);
				window.localStorage.setItem("token", res.data.data.token);
				if (res.data.code === "200") {
					dispatch(
						userLogin({
							token: res.data.data.token,
							loginUser: res.data.data.loginUser,
						})
					);
					navigate("/todoList");
				}
			})
			.catch((err) => {
				console.log(err);
			});

		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={onLogin}>
				메일주소:{" "}
				<input type="text" name="email" value={login.email} onChange={onChangeLogin} />
				<br />
				비밀번호:{" "}
				<input
					type="password"
					name="password"
					value={login.password}
					onChange={onChangeLogin}
				/>
				<br />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
};

export default Login;
