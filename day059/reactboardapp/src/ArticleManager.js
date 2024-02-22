import React, { useState } from "react";
import "./ArticleManager.css";

const ArticleManager = (props) => {
    const [article, setArticle] = useState({
        title: "",
        content: "",
        writer: "",
        selected: false,
    });
    
    const onArticleChange = (e) => {
        setArticle({...article, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        if (article.title === "" || article.content === "" || article.writer === "") {
            alert("제목, 내용, 작성자를 입력해주세요.");
        }
        else{
            props.onInsert(article.title, article.content, article.writer, article.selected);
            setArticle({
                title: "",
                content: "",
                writer: "",
                selected: false,
            });
            e.preventDefault();
        }
    }

    const onClear = () => {
        setArticle({
            title: "",
            content: "",
            writer: "",
            selected: false,
        });
    }

	return (
		<div>
            <h1>게시글 등록</h1>
			<form onSubmit={onSubmit}>
				제목:
				<input name="title" value={article.title} onChange={onArticleChange} />
				내용:
				<input name="content" value={article.content} onChange={onArticleChange} />
                작성자:
                <input name="writer" value={article.writer} onChange={onArticleChange} />
				<button name="btn" type="submit">등록</button>
                <button name="btn" type="button" onClick={() => props.onEdit(article.title, article.content, article.writer)}>수정</button>
                <button name="btn" type="button" onClick={() => props.onDelete()}>삭제</button>
                <button name="btn" type="button" onClick={onClear}>초기화</button>
			</form>
		</div>
	);
};

export default ArticleManager;
