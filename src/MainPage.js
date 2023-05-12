import React, { useState, useEffect } from 'react'
import shapesData from './data/shapes.json'
import planetsData from './data/planets.json'
import './MainPage.css' // Import the CSS file for custom styling

const MainPage = ({ type }) => {
	const [data, setData] = useState([])

	const excludedFields = ['id', 'name', 'color']

	useEffect(() => {
		let jsonData
		if (type === 'shapes') {
			jsonData = shapesData
		} else if (type === 'planets') {
			jsonData = planetsData
		}
		setData(jsonData)
	}, [type])

	const getTitle = () => {
		const routeName = type.charAt(0).toUpperCase() + type.slice(1)
		return `${routeName} Page`
	}

	const handleClick = (item) => {
		const utterance = new SpeechSynthesisUtterance(item.name)
		speechSynthesis.speak(utterance)
	}

	return (
		<div className="app" style={{ overflowX: 'hidden' }}>
			<h1 className="text-center mb-4" style={{ padding: '50px', margin: '50px' }}>
				{getTitle()}
			</h1>
			<div className="thumbnails-container">
				{data.map((item) => (
					<div key={item.id} className="thumbnail" onClick={() => handleClick(item)}>
						<img src={`/images/planets/${item.name.toLowerCase()}.png`} alt={item.name} />
						<div className="thumbnail-details">
							<h3>{item.name}</h3>
							{Object.entries(item).map(([key, value]) => {
								if (!excludedFields.includes(key)) {
									return (
										<p key={key}>
											{key}: {value}
										</p>
									)
								}
								return null
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MainPage
