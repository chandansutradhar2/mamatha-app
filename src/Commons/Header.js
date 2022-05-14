import React from "react";
import "./NavBar.css";

const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				width: "95vw",
				backgroundColor: "white",
			}}
		>
			<div>Logo here</div>
			<div>
				<h1>DevOps Assessments</h1>
			</div>
		</div>
	);
};

export default Header;
