import React, { useMemo, useState } from "react";
import "./App.scss";
import Tile from "./components/Tile";
import { TileState } from "./utils/types/TileState";

function App() {
	const [temp, setTemp] = useState<number>(0);
	const [letter, setLetter] = useState<string>("");

	const state = useMemo((): TileState | undefined => {
		switch (temp) {
			case 1:
				return "yellow";
			case 3:
				return "green";
			case 5:
				return "gray";
			default:
				return undefined;
		}
	}, [temp]);

	return (
		<div className="App">
			<Tile letter={letter} state={state} />
			<button onClick={() => setTemp((temp + 1) % 6)}>Flip</button>
			<button onClick={() => setLetter(letter.length > 0 ? "" : "A")}>Set</button>
		</div>
	);
}

export default App;
