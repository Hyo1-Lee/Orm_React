import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ArticleModify = () => {
	const { aidx } = useParams();
	const [article, setArticle] = useState({ title: "", contents: "" });
	const navigate = useNavigate();
	const titleRef = useRef();
	const contentsRef = useRef();

	const handleArticle = (e) => {
		setArticle({ ...article, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		titleRef.current.focus();
		axios
			.get(`http://localhost:3005/api/articles/${aidx}`)
			.then((response) => {
				console.log(response.data);
				setArticle(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [aidx]);

	const handleSave = () => {
		// 유효성 검사
		if (article.title === "") {
			alert("제목을 입력하세요.");
			titleRef.current.focus();
			return;
		}
		if (article.contents === "") {
			alert("내용을 입력하세요.");
			contentsRef.current.focus();
			return;
		}

		axios
			.post(`http://localhost:3005/api/articles/${aidx}`, article)
			.then((response) => {
				if (response.data.result === "Ok") {
					navigate("/article/list");
				} else {
					alert("백엔드 서버 에러");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleDelete = () => {
		if (!window.confirm("삭제하시겠습니까?")) {
			return;
		}

		axios
			.delete(`http://localhost:3005/api/articles/${aidx}`)
			.then((response) => {
				if (response.data.result === "Ok") {
					navigate("/article/list");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			제목:
			<input name="title" ref={titleRef} value={article.title} onChange={handleArticle} />
			<br />
			내용:
			<textarea
				rows={10}
				cols={50}
				name="contents"
				ref={contentsRef}
				value={article.contents}
				onChange={handleArticle}
			></textarea>
			<button onClick={handleSave}>수정</button>
			<button onClick={handleDelete}>삭제</button>
			<button onClick={() => navigate("/article/list")}>목록</button>
		</div>
	);
};

export default ArticleModify;
