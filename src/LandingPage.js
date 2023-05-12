import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	const landingPageStyle = {
		// backgroundImage: "url('https://source.unsplash.com/featured/?dark,abstract')",
		background: 'linear-gradient(135deg, #000000 0%, #333333 50%)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}

	const linkContainerStyle = {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2rem'
	}

	const linkStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0 1rem',
		textDecoration: 'none',
		color: 'inherit',
		textAlign: 'center',
		color: 'white'
	}

	const thumbnailStyle = {
		width: '100px',
		height: '100px',
		border: '2px solid #ccc',
		borderRadius: '5px',
		overflow: 'hidden',
		padding: '15px'
	}

	const imageStyle = {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	}

	const publicUrl = process.env.PUBLIC_URL

	return (
		<div style={landingPageStyle}>
			<div className="container">
				<div style={linkContainerStyle}>
					<Link to="/shapes" style={linkStyle}>
						<div style={thumbnailStyle}>
							<img src={`${publicUrl}/images/shapes.png`} alt="Shapes" style={imageStyle} />
						</div>
						<div>Shapes</div>
					</Link>
					<Link to="/planets" style={linkStyle}>
						<div style={thumbnailStyle}>
							<img src={`${publicUrl}/images/planets.png`} alt="Planets" style={imageStyle} />
						</div>
						<div>Planets</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
