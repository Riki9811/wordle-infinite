import React, { useEffect, useRef, useState } from "react";
import { TileState } from "../../utils/types/TileState";
import { waitForTransition } from "../../utils/wait";
import styles from "./Tile.module.scss";

interface Props {
	letter: string;
	state?: TileState;
}

export default function Tile(props: Props) {
	const { letter, state } = props;
	const divRef = useRef(null);
	const [className, setClassName] = useState<string>(styles.tile);

	useEffect(() => {
		if (state !== undefined && divRef.current) {
			setClassName(`${styles.tile} ${styles.flipped}`);
			waitForTransition(divRef.current).then(() => {
				setClassName(`${styles.tile} ${styles[state]}`);
			});
		} else {
			setClassName(styles.tile);
		}
	}, [state]);

	return (
		<div ref={divRef} className={className}>
			{letter}
		</div>
	);
}
