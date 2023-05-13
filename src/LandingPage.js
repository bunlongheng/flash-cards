import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	const landingPageStyle = {
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
		color: 'white',
		textAlign: 'center'
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

	const [jsonFiles, setJsonFiles] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/jsons') // Replace with your API endpoint
				const jsonFilesData = await response.json()
				setJsonFiles(jsonFilesData)
			} catch (error) {
				console.error('Error fetching JSON files:', error)
			}
		}

		fetchData()
	}, [])

	return (
		<div style={landingPageStyle}>
			<div className="container">
				<div style={linkContainerStyle}>
					{jsonFiles.map((data, index) => (
						<Link key={index} to={`/${data.name}`} style={linkStyle}>
							<div style={thumbnailStyle}>
								<img src={`${process.env.PUBLIC_URL}/images/${data.name}.png`} alt={data.name} style={imageStyle} />
							</div>
							<div>{data.name}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default LandingPage
