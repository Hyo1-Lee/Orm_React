import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleList = () => {
	const [articleList, setArticleList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3005/api/articles")
			.then((response) => {
				console.log(response.data);
				setArticleList(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const navigate = useNavigate();
	// 게시글 작성 버튼 클릭시 실행되는 이벤트 함수
	const handleRegist = () => {
		navigate("/article/regist");
	};

	return (
		<div>
			<h1>게시글 목록 페이지</h1>
			<button onClick={handleRegist}>게시글작성</button>

			<table>
				<thead>
					<tr>
						<th>글 번호</th>
						<th>글 제목</th>
						<th>조회수</th>
						<th>IP 주소</th>
						<th>게시여부</th>
						<th>작성일</th>
						<th>작성자</th>
					</tr>
				</thead>

				<tbody>
					{articleList.map((article, index) => (
						<tr key={index}>
							<td>{article.articleNo}</td>
							<td>
								<Link to={{ pathname: `/article/modify/${article.articleNo}` }}>
									{article.title}
								</Link>
							</td>
							<td>{article.hitCnt}</td>
							<td>{article.ip}</td>
							<td>{article.useYn}</td>
							<td>{article.regDate}</td>
							<td>{article.regId}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ArticleList;
