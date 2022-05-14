import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
	return (
		<div>
			<ul className="navbar">
				<li>
					<Link to={""}>Home</Link>
				</li>
				<li>
					<Link to={"/score"}>DevOps Assessments and Score</Link>
				</li>
				<li>
					<Link to={"/metric"}>Bankwide DORA Metrics</Link>
				</li>
				<li>
					<Link to={"/feedback"}>Give Your Feedback</Link>
				</li>
			</ul>
		</div>
	);
};
