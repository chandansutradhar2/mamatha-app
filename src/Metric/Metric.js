import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const ddl = [
	"All Franchise",
	"CTO",
	"Commercial",
	"Data",
	"Enterprise Solution",
	"Add More Here",
];

export const Metric = () => {
	const [teams, setTeam] = useState(ddl);
	return (
		<div style={{ width: "80vw", backgroundColor: "white", padding: "10px" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "inherit",
				}}
			>
				<div style={{ padding: "10px", height: "25vh" }}>
					Performance Metric
				</div>

				<div style={{ padding: "10px" }}>Speedometer Guage Here</div>
			</div>
			<Divider />
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "inherit",
				}}
			>
				<div style={{ padding: "10px" }}>left Side Chart </div>
				<div style={{ padding: "10px" }}>Right Side Chart</div>
			</div>
		</div>
	);
};
