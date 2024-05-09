import React from 'react';
import Input from '../components/Input';
import { css } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
	const [data, setData] = React.useState({email:'', pwd:'' });
	const navigate = useNavigate();

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		axios.get('/')
			.then(resp => {
				console.log(resp.data);
			})
			.catch(err => {
				console.log(err)
			})
		//console.log({'email': data.email, 'pwd': data.pwd});
	}

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
			border: "1px solid #",
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
		}),

		btns: css({
			display: "flex",
			justifyContent: "center",
		}),

		btnSubmit: css({
			margin: "auto",
			border: "1px solid black",
			backgroundColor: "purple",
		}),

		btnRegister: css({
			margin: "auto",
			border: "1px solid black",
			backgroundColor: "black",
		}),
	};
	
	return (
		<div css={styles.root}>
			<form css={styles.formBox} onSubmit={handleSubmit}>
				<Input inptName="Email" wd={250} isPwd={false} setVal={(val:string) => setData({...data, email: val})} />

				<Input inptName="Password" wd={250} isPwd={true} setVal={(val:string) => setData({...data, pwd: val})} />

				<div css={styles.btns}>
					<button css={styles.btnSubmit} type="submit">Login</button>
					<button css={styles.btnRegister} type="button" onClick={() => navigate('/register')}>Register</button>
				</div>
			</form>
		</div>

	);
}
