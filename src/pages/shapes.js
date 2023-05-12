import React, { useState, useEffect } from 'react'
import shapesData from '../data/shapes.json'

const ShapesPage = () => {
	const [shapes, setShapes] = useState([])

	const excludedFields = ['id', 'name', 'color']

	useEffect(() => {
		setShapes(shapesData)
	}, [])

	return (
		<div>
			<h1>Shapes Page</h1>
			{shapes.map((shape) => (
				<div key={shape.id}>
					<h3>{shape.name}</h3>
					{Object.entries(shape).map(([key, value]) => {
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
			))}
		</div>
	)
}

export default ShapesPage
