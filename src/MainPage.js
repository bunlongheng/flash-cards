import React, { useState, useEffect } from 'react'
import shapesData from './data/shapes.json'
import planetsData from './data/planets.json'

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

	return (
		<div>
			<h1>{getTitle()}</h1>
			{data.map((item) => (
				<div key={item.id}>
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
			))}
		</div>
	)
}

export default MainPage
