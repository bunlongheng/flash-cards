import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import MainPage from './MainPage'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/shapes" element={<MainPage type="shapes" />} />
				<Route path="/planets" element={<MainPage type="planets" />} />
			</Routes>
		</Router>
	)
}

export default App
