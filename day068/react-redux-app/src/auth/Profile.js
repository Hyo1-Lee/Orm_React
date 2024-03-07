import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
	const token = useSelector((state) => state.Auth.token);
	const loginUser = useSelector((state) => state.Auth.loginUser);

	useEffect(() => {
		axios
			.get("http://localhost:3005/api/member/profile", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<h1>프로필 페이지</h1>
			메일주소 : {loginUser.email} <br />
			이름 : {loginUser.name} <br />
			프로필 사진 : <img src={loginUser.profile_img_path} alt="프로필 이미지" /> <br />
			<hr></hr>
		</div>
	);
};

export default Profile;
