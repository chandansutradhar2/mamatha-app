import logo from "./logo.svg";
import "./App.css";
import Header from "./Commons/Header";
import { NavBar } from "./Commons/NavBar";
import Home from "./Home/Home";
import { Metric } from "./Metric/Metric";
import { Feedback } from "./Feedback/Feedback";
import { Score } from "./Score/Score";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { CreateAssessment } from "./Assessment/CreateAssessment";
import { TeamForm } from "./Assessment/TeamForm";
const theme = createTheme({
	typography: {
		fontFamily: [
			"Merriweather",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<BrowserRouter>
					<Header />
					<NavBar />
					<div className="body">
						<Routes>
							<Route path="" element={<Home />} />
							<Route path="/metric" element={<Metric />} />
							<Route path="/feedback" element={<Feedback />} />
							<Route path="/score" element={<Score />} />
							<Route path="/createAssessment" element={<CreateAssessment />} />
							<Route path="/createTeam" element={<TeamForm />} />
						</Routes>
					</div>
				</BrowserRouter>
			</div>
		</ThemeProvider>
	);
}

export default App;
