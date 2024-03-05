import React, { useState } from "react";

//useHistory훅을 참조해서 개발자가 원하는 라우팅주소 URL을 호출해서 해당 컴포넌트를 렌더링시킨다.
import { useNavigate } from "react-router-dom";

const ArticleModify = () => {
	const navigate = useNavigate();
	return (
		<div>
			제목:
			<input name="title" />
			<br />
			내용:
			<textarea named="contents"></textarea>
			<button>수정</button>
			<button>삭제</button>
			<button onClick={() => navigate("/article/list")}>목록</button>
		</div>
	);
};

export default ArticleModify;
