import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function CreateAssessment() {
	const [yes, setYes] = useState(true);
	const [no, setNo] = useState(false);
	const [showButton, setShowButton] = useState(false);

	const navigate = useNavigate();
	return (
		<div
			style={{
				justifyContent: "center",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "white",
				width: "90vw",
			}}
		>
			<div style={{ padding: "15px" }}>
				For Assessment you need to identify bla bla bla
			</div>
			<div>
				<p>Have You Already Created a Team?</p>
				<div className="yesno">
					<div>
						<input
							type="radio"
							name="yes"
							value={yes}
							onClick={() => {
								setYes(true);
								setNo(false);
								setShowButton(false);
							}}
						/>
						Yes
					</div>
					<div>
						<input
							type="radio"
							name="yes"
							value={yes}
							onClick={() => {
								setYes(true);
								setNo(false);
								setShowButton(true);
							}}
						/>
						No
					</div>
				</div>
				<div>
					{showButton ? (
						<Button
							style={{ margin: "10px", backgroundColor: "purple" }}
							variant="contained"
							onClick={() => navigate("/createTeam")}
						>
							Create Team
						</Button>
					) : null}
				</div>
			</div>
		</div>
	);
}
