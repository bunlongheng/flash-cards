import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'

import ShapesPage from './pages/shapes'
import PlanetsPage from './pages/planets'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/shapes" element={<ShapesPage />} />
				<Route path="/planets" element={<PlanetsPage />} />
			</Routes>
		</Router>
	)
}

export default App
