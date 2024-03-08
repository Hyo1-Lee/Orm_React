import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions";
// redux의 connect 함수 참조
// 전역 데이터를 사용하려는 특정 컴포넌트의 전역 데이터 관리기능을 연결해주는 함수
// 전역 데이터 값을 해당 컴포넌트의 props로 전달받을 수 있게 해줌
import { connect } from "react-redux";

const Login3 = (props) => {
	const [login, setLogin] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	console.log("전역 데이터 값: ", props);

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
				console.log(res);
				if (res.data.code === "200") {
					// 전역 데이터에 로그인 정보 저장
					props.userLogin({
						token: res.data.data.token,
						loginUser: res.data.data.loginUser,
					});
					navigate("/");
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

const mapStateToProps = (state) => {
	const { token, loginUser } = state.Auth;
	return { token, loginUser };
};

export default connect(mapStateToProps, { userLogin })(Login3);
