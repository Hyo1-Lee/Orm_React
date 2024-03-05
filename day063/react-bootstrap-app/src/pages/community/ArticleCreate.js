import React, { useState } from "react";
import "../../css/ArticleCreate.css";

const ArticleCreate = (props) => {
	const [article, setArticle] = useState({
		title: "",
		content: "",
		category: "",
		date: "",
	});

	const onArticleChange = (e) => {
		setArticle({ ...article, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const title = document.getElementById("title").value;
		const contents = document.getElementById("contents").value;



		console.log(title, contents);
		window.location.href = "/community";
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="alert alert-info">
						<strong>파일 업로드 가이드:</strong> 여기에 파일 업로드에 대한 지침을
						적습니다.
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<form>
						<div className="form-group" id="file-upload-container">
							<label htmlFor="fileUpload">파일 선택:</label>
							<input type="file" className="form-control-file" id="fileUpload" />
						</div>
					</form>
				</div>
			</div>
			<hr />
			<form onSubmit={onSubmit}>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="title"
						placeholder="제목을 입력해 주세요."
						onChange={onArticleChange}
					/>
				</div>
				<hr />
				<div class="form-group">
					<textarea
						class="form-control"
						id="contents"
						rows="10"
						placeholder="내용을 입력해 주세요."
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary" id="btn-submit">
					발생신청
				</button>
				<button type="button" className="btn btn-secondary" id="btn-submit">
					임시저장
				</button>
			</form>
		</div>
	);
};

export default ArticleCreate;
