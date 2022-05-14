import React, { useState } from "react";
import "./Home.css";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
const Home = () => {
	return (
		<div className="home">
			<div
				style={{
					borderRadius: "5px",
					marginTop: "5px",
					padding: "5px",
					backgroundColor: "white",
				}}
				eleva
			>
				<h2>Welcome</h2>
				<Divider />
				<p>
					Welcome to Self-service DevOps and metric tool.Through this tool you
					can do a DevOps assessment and also capture DORA metric of your team.
				</p>
			</div>
			<div style={{ display: "flex", marginTop: "0.8rem" }}>
				<div
					style={{
						marginRight: "10px",
						borderRadius: "5px",
						backgroundColor: "white",
					}}
				>
					<h2>Assessments</h2>
					<Divider />
					<p>
						Welcome to Self-service DevOps and metric tool.Through this tool you
						can do a DevOps assessment and also capture DORA metric of your
						team.
					</p>
				</div>
				<div style={{ borderRadius: "5px", backgroundColor: "white" }}>
					<h2>Metrics</h2>
					<Divider />
					<p>
						Welcome to Self-service DevOps and metric tool.Through this tool you
						can do a DevOps assessment and also capture DORA metric of your
						team.
					</p>
				</div>
			</div>
			<div
				style={{
					marginTop: "10px",
					padding: "10px",
					borderRadius: "5px",
					backgroundColor: "white",
				}}
			>
				This site is developed and maintained by Chandan Naresh
			</div>
		</div>
	);
};

export default Home;
