import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import UnknownGamemode from "./pages/UnknownGamemode";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game-mode">
					<Route path="classic" element={<Home />} />
					<Route path="infinite" element={<Home />} />
					<Route path="quordle" element={<Home />} />
					<Route path="quordle-infinite" element={<Home />} />
					<Route path="*" element={<UnknownGamemode />} />
				</Route>
				<Route path="/*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
