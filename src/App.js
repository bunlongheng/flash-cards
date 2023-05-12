import React, { useState } from 'react'
import shapes from './shapes.json'
import 'bootstrap/dist/css/bootstrap.min.css'

function Thumbnail({ item, onItemClick }) {
	const handleClick = () => {
		const utterance = new SpeechSynthesisUtterance(item.name);
		speechSynthesis.speak(utterance);
		onItemClick(item);
	  };

	const imageUrl = `${item.image}?${item.name}`

	return (
		<div className="col-sm-4 col-md-3 col-lg-2 mb-4">
			<div className="thumbnail text-center" onClick={handleClick}>
				<img src={imageUrl} alt={item.name} className="img-thumbnail" />
				<div className="name mt-2">{item.name}</div>
			</div>
		</div>
	)
}

function Details({ item, handleClose }) {
	// Construct a new image URL that includes the item name
	const imageUrl = `${item.image}?${item.name}`

	// Set the background color to the item color
	const containerStyle = {
		backgroundColor: `rgba(${item.color}, 0.8)`
	}

	return (
		<div className="item-details-container border rounded" style={containerStyle}>
			<div className="item-details text-center rounded">
				<img src={imageUrl} alt={item.name} className="img-thumbnail mb-3" style={{ width: '200px', height: '200px' }} />
				<h2 className="mb-3">{item.name}</h2>
				<div className="d-flex flex-column justify-content-between align-items-center">
					<div>
						<p>Color: {item.color}</p>
						<p>Number of sides: {item.sides}</p>
					</div>
					<button className="btn btn-primary mt-3" onClick={handleClose}>
						Close
					</button>
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

	const handleClose = () => {
		setSelectedItem(null)
	}
	return (
		<div className="app">
			<h1 className="text-center">Shapes</h1>
			<div className="item-list container">
				<div className="row">
					{shapes.map((item) => (
						<Thumbnail key={item.id} item={item} onItemClick={handleItemClick} />
					))}
				</div>
			</div>
			{selectedItem && (
				<div className="selected-item-details">
					<Details item={selectedItem} />
				</div>
			)}
		</div>
	)
}

export default App
