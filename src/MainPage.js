import React, { useState, useEffect } from 'react'

import './MainPage.css' // Import the CSS file for custom styling

const MainPage = ({ type }) => {
	const [data, setData] = useState([])
	const [isSpeaking, setIsSpeaking] = useState(false)

	const excludedFields = ['id', 'name', 'color']

	useEffect(() => {
		const jsonData = require(`./data/${type}.json`)
		setData(jsonData)
	}, [type])

	const getPageName = () => {
		return type.charAt(0).toUpperCase() + type.slice(1)
	}

	const handleClick = (item) => {
		if (!isSpeaking) {
			const utterance = new SpeechSynthesisUtterance(item.name)
			setIsSpeaking(true)

			utterance.onend = () => {
				setIsSpeaking(false)
			}

			speechSynthesis.cancel() // Clear the speech synthesis queue
			speechSynthesis.speak(utterance)
		}
	}

	const getImageSource = (item) => {
		if (type === 'animals') {
			return `https://source.unsplash.com/300x300/?${item.name}`
		}

		return `/images/${item.name.toLowerCase()}.png`
	}

	return (
		<div className="app" style={{ overflowX: 'hidden' }}>
			<h1 className="text-center mb-4" style={{ padding: '50px', margin: '50px' }}>
				{getPageName()}
			</h1>
			<div className="thumbnails-container">
				{data.map((item) => (
					<div key={item.id} className={`thumbnail ${isSpeaking ? 'disabled' : ''}`} onClick={() => handleClick(item)}>
						<img src={getImageSource(item)} alt={item.name} />

						<div className="thumbnail-details">
							<h6>{item.name}</h6>
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
