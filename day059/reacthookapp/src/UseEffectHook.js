import React, { useEffect, useState, useReducer } from "react";

const UseEffectHook = () => {
	console.log("UseEffectHook");
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		telephone: "",
	});

	const [userList, setUserList] = useState([]);

	// useEffect 훅은 되도록 useState 훅 아래 영역에 정의
	// 보통은 화면 ui가 모두 랜더링이 완료되면 벡엔드에서 화면에 표시할 데이터를 가져오거나
	// 화면 내 특정 값을 변경 초기화할 때 주로 해당 이벤트를 사용
	// useEffect(실행함수, 변경감지 데이터, 빈배열[] 값을 할당한 경우는 최초 컴포넌트 랜더링 시점 캐치)
	useEffect(() => {
		console.log("useEffect");
		console.log(user);

		return () => {
			// 해당 컴포넌트가 사라지기 전에 수행하야 하는 작업 정의
		};
	}, []);

	useEffect(() => {
		console.log("userList 변경", userList);
	}, [userList]);

    // 매번 컴포넌트가 렌더링 될 때 마다 무언가를 해야할 때 그 시점 캐치
    // 렌더링 된다는 뜻은 데이터 바인딩에 의해 특정 데이터 소스가 변경되었음을 의미
    // 어던 데이터가 변경되었는지 체크하고 관련 로직을 구현할 때 가끔 사용
    useEffect(() => {
        console.log("특정 상태 변경, 페이지 렌더링");
    });

	const onUser = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSave = () => {
		setUserList([...userList, user]);
	};

	return (
		<div>
			<h1>사용자 정보 관리</h1>

			<div>
				<h3>사용자 정보 입력 영역</h3>
				<input value={user.name} name="name" onChange={onUser} />
				<input value={user.email} name="email" onChange={onUser} />
				<input value={user.password} name="password" onChange={onUser} />
				<input value={user.telephone} name="telephone" onChange={onUser} />
				<button onClick={onSave}>저장</button>

				<h3>사용자 정보 출력 영역</h3>
				<div>이름:{user.name}</div>
				<div>이메일:{user.email}</div>
				<div>비밀번호:{user.password}</div>
				<div>전화번호:{user.telephone}</div>
				<hr></hr>
				<p>총 등록 사용자 수 {userList.length}</p>
			</div>
		</div>
	);
};

export default UseEffectHook;
