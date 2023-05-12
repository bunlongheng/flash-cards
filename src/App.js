import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import MainPage from './MainPage'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS

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
