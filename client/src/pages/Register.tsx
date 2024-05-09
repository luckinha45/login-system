import React from 'react'
import { css } from '@emotion/react';
import Input from '../components/Input';

export default function Register() {

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		console.log(data);

		if (data.pwd !== data.confirmPwd) {
			alert("Passwords do not match");
			return;
		}
	}

	const [data, setData] = React.useState({name: '', email: '', pwd: '', confirmPwd: ''})

	const styles = {
		root: css({
			display: "flex",
			justifyContent: "center",
			width: "100vw",
		}),

		formBox: css({
			backgroundColor: 'rgb(53, 1, 45)',
			boxShadow: "0px 0px 10px 2px black",
			margin: "auto",
			marginTop: "100px",
			padding: "20px",
			borderRadius: "10px",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
		}),

		btnRegister: css({
			margin: "auto",
			border: "1px solid black",
			backgroundColor: "purple",
		}),
	};

	return (
	<div>
		<div css={styles.root}>
			<form css={styles.formBox} onSubmit={handleSubmit}>

				<Input inptName="Name" wd={250} isPwd={false} setVal={(val:string) => setData({...data, name: val})} />
				<Input inptName="Email" wd={250} isPwd={false} setVal={(val:string) => setData({...data, email: val})} />
				<Input inptName="Password" wd={250} isPwd={true} setVal={(val:string) => setData({...data, pwd: val})} />
				<Input inptName="Confirm Password" wd={250} isPwd={true} setVal={(val:string) => setData({...data, confirmPwd: val})} />

				<button css={styles.btnRegister} type="submit">Register</button>
			</form>
		</div>
	</div>
	)
}
