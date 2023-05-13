import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import MainPage from './MainPage'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const typesString = process.env.REACT_APP_TYPES || ''
const typesArray = typesString.split(',')

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				{typesArray.map((type) => (
					<Route key={type} path={`/${type}`} element={<MainPage type={type} />} />
				))}
			</Routes>
		</Router>
	)
}

export default App
