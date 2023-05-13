import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
	const typesString = process.env.REACT_APP_TYPES || ''
	const typesArray = typesString.split(',')

	return (
		<div className="landing-page">
			<div className="container">
				<div className="link-container">
					{typesArray.map((data, index) => (
						<Link key={index} to={`/${data}`} className="link-style">
							<div className="thumbnail-style">
								<img src={`${process.env.PUBLIC_URL}/images/${data}.png`} alt={data} className="image-style" />
							</div>
							<div>{data}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default LandingPage
