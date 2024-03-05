import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
	return (
		<div>
			<span>
				<Link to="/">메인</Link>
			</span>
			|
			<span>
				<Link to="/article/list">게시글 목록</Link>
			</span>
			|
			<span>
				<Link to="/about">회사소개</Link>
			</span>
		</div>
	);
};

export default TopMenu;
