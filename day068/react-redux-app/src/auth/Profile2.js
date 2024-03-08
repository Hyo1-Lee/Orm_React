import React from "react";
import { connect } from "react-redux";

const Profile2 = (props) => {
	return (
		<div>
			<h1>프로필 페이지</h1>
			메일주소 : {props.loginUser.email} <br />
			이름 : {props.loginUser.name} <br />
			프로필 사진 : <img src={props.loginUser.profile_img_path} alt="프로필 이미지" /> <br />
			<hr></hr>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { token, loginUser } = state.Auth;
	return { token, loginUser };
};

export default connect(mapStateToProps)(Profile2);
