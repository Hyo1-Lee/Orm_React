import React from "react";

const AuthLayout = (props) => {
	return (
		<div>
			<React.Fragment>
				<div className="layout-wrapper d-lg-flex">{props.children}</div>
			</React.Fragment>
		</div>
	);
};

export default AuthLayout;
