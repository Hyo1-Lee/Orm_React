import React from "react";
import { Link } from "react-router-dom";

const GNB = () => {
	return (
		<div
			style={{
				justifyContent: "space-between",
				padding: "10px",
				borderBottom: "1px solid #ddd",
			}}
		>
			<span>
				<Link to="/">홈</Link>|<Link to="/login">로그인</Link>|
				<Link to="/entry">회원가입</Link>|<Link to="/profile">프로필|</Link>|
				<Link to="profile2">프로필2</Link>|<Link to="/todolist">할일목록</Link>|
			</span>
			<span>
				<Link to="/login2">로그인2</Link>|
			</span>
			<span>
				<Link to="/login3">로그인3</Link>|
			</span>
		</div>
	);
};

export default GNB;
