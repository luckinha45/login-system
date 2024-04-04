import React from 'react'

export default function Login() {
	
	const [email, setEmail] = React.useState("");
	const [pwd, setPwd] = React.useState("");

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		console.log({'email': email, 'pwd': pwd});
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label>Email</label>
			<input type="email" placeholder="Insert Email..." onChange={(e) => setEmail(e.target.value)}/>
			<br />

			<label>Password</label>
			<input type="password" placeholder="Insert Password..." onChange={(e) => setPwd(e.target.value)}/>
			<br />
			<br />
			<button type="submit">Login</button>
		</form>

	);
}
