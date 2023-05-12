import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	return (
		<div>
			<h1>Welcome to the Landing Page</h1>
			<nav>
				<ul>
					<li>
						<Link to="/shapes">Shapes</Link>
					</li>
					<li>
						<Link to="/planets">Planets</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default LandingPage
