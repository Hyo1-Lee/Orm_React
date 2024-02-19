import React, { useState } from "react";

const ReferTypeEvent = () => {
	// 회원가입 사용자 객체 데이터 구조 정의 및 조기값 세팅하기
	const [user, setUser] = useState({
		email: "",
		password: "",
		userName: "",
	});

    const handleUser = (e) => {
        // 이벤트 발생시점의 user 객체의 복사본을 만들고 복사본의 특정 속성의 값을 이벤트 발생 ui 요소값으로 변경해서 적용
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleEnterSave = (e) => {
        if (e.key === "Enter") {
            handleSave();
        }
    }

    const handleSave = () => {
        console.log("백엔드로 데이터를 전송합니다.", user);
        alert("저장 완료");
    }

    const handleInit = () => {
        setUser({
            email: "",
            password: "",
            userName: ""
        });
    }

	return (
		<div>
			<h1>참조타입-데이터바인딩기법</h1>
			메일주소:
			<input type="text" placeholder="메일주소" name="email" value={user.email} onChange={handleUser} />
			<br />
			<br />
			비밀번호:{" "}
			<input
				type="password"
				placeholder="비밀번호"
                name="password"
				value={user.password}
				onChange={handleUser}
			/>
			<br />
			<br />
			사용자이름:{" "}
			<input
				type="text"
				placeholder="사용자이름"
                name="userName"
				value={user.userName}
				onChange={handleUser}
				onKeyDown={handleEnterSave}
			/>
			<br />
			<br />
			<hr></hr>
			<button onClick={handleSave}>저장</button>
			<button onClick={handleInit}>초기화</button>
		</div>
	);
};

export default ReferTypeEvent;
