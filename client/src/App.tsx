import { Routes, Route } from 'react-router-dom'
import * as pages from './pages'
import NavBar from './components/NavBar'

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
