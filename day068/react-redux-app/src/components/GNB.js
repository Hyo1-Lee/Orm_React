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
				<Link to="/entry">회원가입</Link>|<Link to="/profile">프로필</Link>
			</span>
		</div>
	);
};

export default GNB;
