import React, { useState } from 'react'
import shapes from './shapes.json'
import 'bootstrap/dist/css/bootstrap.min.css'

function Thumbnail({ item, onItemClick }) {
	const handleClick = () => {
		const utterance = new SpeechSynthesisUtterance(item.name)
		speechSynthesis.speak(utterance)
		onItemClick(item)
	}

	const imageUrl = `https://source.unsplash.com/300x300/?shape,${item.image}?${item.name}`

	return (
		<div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
			<div className="thumbnail text-center" onClick={handleClick}>
				<img src={imageUrl} alt={item.name} className="img-thumbnail" />
				<div className="name mt-2">{item.name}</div>
			</div>
		</div>
	)
}

function hexToRgb(hex) {
	const r = parseInt(hex.substr(1, 2), 16)
	const g = parseInt(hex.substr(3, 2), 16)
	const b = parseInt(hex.substr(5, 2), 16)
	return `${r}, ${g}, ${b}`
}

function Details({ item, handleClose }) {
	const imageUrl = `https://source.unsplash.com/300x300/?shape,${item.image}?${item.name}`

	const containerStyle = {
		backgroundColor: `rgba(${hexToRgb(item.color)}, 0.1)`
	}

	const excludedFields = ['id', 'name', 'color']

	return (
		<div className="item-details-container border rounded" style={containerStyle} onClick={handleClose}>
			<div className="item-details text-center rounded">
				<img src={imageUrl} alt={item.name} className="img-thumbnail mb-3" style={{ width: '200px', height: '200px' }} />
				<h2 className="mb-3">{item.name}</h2>
				<div className="d-flex flex-column justify-content-between align-items-center">
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
		</div>
	)
}

function App() {
	const [selectedItem, setSelectedItem] = useState(null)

	const handleItemClick = (item) => {
		setSelectedItem(item)
	}

	const handleClose = (event) => {
		event.stopPropagation()
		setSelectedItem(null)
	}

	return (
		<div className="app">
			<h1 className="text-center mb-4" style={{ padding: '50px', margin: '50px' }}>
				Shapes
			</h1>
			<div className="item-list container">
				<div className="row">
					{shapes.map((item) => (
						<Thumbnail key={item.id} item={item} onItemClick={handleItemClick} />
					))}
				</div>
			</div>
			{selectedItem && (
				<div className="selected-item-details">
					<Details item={selectedItem} handleClose={handleClose} />
				</div>
			)}
		</div>
	)
}

export default App
