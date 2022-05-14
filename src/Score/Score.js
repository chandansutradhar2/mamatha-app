import {
	Button,
	Divider,
	Input,
	Radio,
	RadioGroup,
	FormControlLabel,
	TextField,
	InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import "./Score.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
export const Score = () => {
	const [radioState, setRadioState] = useState({
		summary: true,
		assessment: false,
		metric: false,
	});

	const navigate = useNavigate();

	return (
		<div className="score">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "inherit",
				}}
			>
				<h2 style={{ paddingLeft: "20px" }}>Teams</h2>
				<Button
					style={{ margin: "10px", backgroundColor: "purple" }}
					variant="contained"
					onClick={() => navigate("/createAssessment")}
				>
					Take Assessment
				</Button>
			</div>
			<Divider />
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "inherit",
				}}
			>
				<div style={{ padding: "20px" }}>
					<RadioGroup row>
						<FormControlLabel
							value={radioState.summary}
							control={<Radio />}
							label="Summary"
							onClick={() =>
								setRadioState({
									assessment: false,
									summary: true,
									metric: false,
								})
							}
						/>
						<FormControlLabel
							value={radioState.assessment}
							control={<Radio />}
							label="Latest Assessment Detail"
							onClick={() =>
								setRadioState({
									assessment: true,
									summary: false,
									metric: false,
								})
							}
						/>
						<FormControlLabel
							value={radioState.metric}
							control={<Radio />}
							label="Metric Detail"
							onClick={() =>
								setRadioState({
									assessment: false,
									summary: false,
									metric: true,
								})
							}
						/>
					</RadioGroup>
				</div>
				<div style={{ padding: "20px", width: "350px" }}>
					<TextField
						style={{ width: "inherit" }}
						placeholder="Search Team"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</div>
			</div>
			<div style={{ padding: "20px" }}>
				<table style={{ width: "70vw" }}>
					<thead style={{ backgroundColor: "#f0f5fe", padding: "15px" }}>
						<tr>
							<td style={{ padding: "15px" }}>
								<strong>Teams</strong>
							</td>
							<td style={{ padding: "15px" }}>
								<strong>Created</strong>
							</td>
							<td style={{ padding: "15px" }}>
								<strong>DevOps Metric</strong>
							</td>
							<td style={{ padding: "15px" }}>
								<strong>Latest Assessment</strong>
							</td>
							<td style={{ padding: "15px" }}>
								<strong>Latest Score</strong>
							</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};
