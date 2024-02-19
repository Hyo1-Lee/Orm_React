import React, { useState } from "react";

const PrimitiveTypeEvent = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleSave = () => {
        var user = {
            email: email,
            password: password,
            userName: userName
        }

        console.log("백엔드로 데이터를 전송합니다.", user);
        alert("저장 완료");
    }

    const handleInit = () => {
        setEmail("");
        setPassword("");
        setUserName("");
    }

    const handleEnterSave = (e) => {
        if (e.key === "Enter") {
            handleSave();
        }
    }

	return (
		<div>
			<h1>회원가입-원시타입 데이터 바인딩</h1>
			메일주소:
			<input type="text" placeholder="메일주소" value={email} onChange={handleEmail} />
			<br />
            <br />
			비밀번호: <input type="password" placeholder="비밀번호" value={password} onChange={handlePassword} />
			<br />
            <br />
			사용자이름: <input type="text" placeholder="사용자이름" value={userName} onChange={handleUserName} onKeyDown={handleEnterSave} />
			<br />
            <br />
            <hr></hr>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
		</div>
	);
};

export default PrimitiveTypeEvent;
