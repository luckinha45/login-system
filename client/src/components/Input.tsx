import { css } from '@emotion/react';

export default function Input(prop: {inptName: string, wd: number, isPwd: boolean, setVal: (val:string)=>void}) {
	const styles = {
		div: css({
			padding: "15px",
			paddingLeft: "0px",
			paddingRight: "0px",
			position: "relative",
		}),

		lbl: css({
			position: "absolute",
			top: "-2px",
			left: "3px",
			backgroundColor: "purple",
			padding: "0px 5px 0px 5px",
			borderRadius: "5px",
			border: "1px solid black",
			color: "white",
			fontWeight: 450,
			//WebkitTextStroke: "0.5px black",
		}),

		inpt: css({
			width: prop.wd,
			fontSize: "1rem",
			padding: "9px 0px 5px 5px",
			borderRadius: "5px",
			border: "1px solid white",
			fontWeight: 400,
		})
	};

	return (
		<div css={styles.div}>
			<input type={prop.isPwd ? "password" : "text"} css={styles.inpt} onChange={(e) => prop.setVal(e.target.value)} />
			<label css={styles.lbl}>{prop.inptName}</label>
		</div>
	)
}
