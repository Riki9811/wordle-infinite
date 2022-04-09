import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Error404.module.scss";

export default function Error404(): JSX.Element {
	return (
		<>
			<h1>404: Page Not Found</h1>
			<p>
                Oops, it seems like the page
				<code> '{window.location.pathname}' </code>
                either doesn't exist or isn't available right now.
			</p>
            <p>It's best if you just <Link to="/">go back to the Home</Link>.</p>
		</>
	);
}
