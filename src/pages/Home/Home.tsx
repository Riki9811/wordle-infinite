import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Home.module.scss";

export default function Home(): JSX.Element {
	return (
		<div className="flex">
			<h1>Welcome to Wordle Infinite</h1>
			<p>
				Here you will find all sorts of games similar to the original Wordle games, each one with a different
				twist!
			</p>
			<p>Explore the Game-modes:</p>
			<ul>
				<li>
					<Link to="/game-mode/classic">Wordle Classic</Link>
				</li>
				<li>
					<Link to="/game-mode/infinite">Wordle Infinite</Link>
				</li>
				<li>
					<Link to="/game-mode/quordle">Quordle</Link>
				</li>
				<li>
					<Link to="/game-mode/quordle-infinite">Quordle infinite</Link>
				</li>
				<li>
					<Link to="/roba-che-non-esiste">404 check</Link>
				</li>
				<li>
					<Link to="/game-mode/roba-che-non-esiste">Unknow gamemode check</Link>
				</li>
			</ul>
		</div>
	);
}
