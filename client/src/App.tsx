import { Routes, Route } from 'react-router-dom'
import * as pages from './pages'
import NavBar from './components/NavBar'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export default function App() {
  return (
	<div>
		<NavBar />
		<Routes>
			<Route path="/" element={<pages.Home />} />
			<Route path="/login" element={<pages.Login />} />
			<Route path="/register" element={<pages.Register />} />
		</Routes>
	</div>
  )
}
