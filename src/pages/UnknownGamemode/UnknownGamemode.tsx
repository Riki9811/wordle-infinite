import React from "react";
import { Link } from "react-router-dom";
// import styles from "./UnknownGamemode.module.scss";

export default function UnknownGamemode(): JSX.Element {
	return (
		<div style={{color: "darkred"}}>
			<h1>404: Page Not Found</h1>
			<p>
                Oops, it seems like the page
				<code> '{window.location.pathname}' </code>
                either doesn't exist or isn't available right now.
			</p>
            <p>Were you looking for a particular game mode? Here's a list of currently available game-modes.</p>
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
			</ul>
		</div>
	);
}
