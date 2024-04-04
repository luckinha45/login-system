import React from 'react'

export default function Register() {

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault()
		console.log(data)
	}

	const [data, setData] = React.useState({name: '', email: '', pwd: '', confirmPwd: ''})

	return (
	<div>
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<input type="text" placeholder='Insert Name...' onChange={e => setData({...data, name: e.target.value})} />
			<br/>
			
			<label>Email</label>
			<input type="email" placeholder='Insert Email...' onChange={e => setData({...data, email: e.target.value})} />
			<br/>
			
			<label>Password</label>
			<input type="password" placeholder='Insert Password...' onChange={e => setData({...data, pwd: e.target.value})} />
			<br/>
			
			<label>Confirm Password</label>
			<input type="password" placeholder='Insert Password...' onChange={e => setData({...data, confirmPwd: e.target.value})} />
			<br/><br/>

			<button type="submit">Registrar</button>
		</form>
	</div>
	)
}
