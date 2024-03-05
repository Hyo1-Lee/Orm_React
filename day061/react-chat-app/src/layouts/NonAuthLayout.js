import React from "react";

const NonAuthLayout = (props) => {
	return (
		<div>
			<React.Fragment>{props.children}</React.Fragment>
		</div>
	);
};

export default NonAuthLayout;
