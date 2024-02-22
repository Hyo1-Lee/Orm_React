import React from "react";
import "./ArticleList.css"

const ArticleList = (props) => {
	return (
		<div>
			<h1 id="article-title">게시판</h1>
			<table id="article-list">
				<thead>
					<tr>
						<th>글번호</th>
						<th>제목</th>
						<th>내용</th>
                        <th>등록자</th>
						<th>선택</th>
					</tr>
				</thead>
				<tbody>
					{props.articles.map((article) => (
						<tr>
							<td>{article.id}</td>
							<td>{article.title}</td>
							<td>{article.content}</td>
                            <td>{article.writer}</td>
                            <td>
								<input
									type="checkbox"
									value={article.selected}
									onClick={() => props.onSelect(article.id)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ArticleList;
