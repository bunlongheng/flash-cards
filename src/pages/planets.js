import React, { useState, useEffect } from 'react'
import planetsData from '../data/planets.json'

const PlanetsPage = () => {
	const [planets, setPlanets] = useState([])

	const excludedFields = ['id', 'name', 'color']

	useEffect(() => {
		setPlanets(planetsData)
	}, [])

	return (
		<div>
			<h1>Planets Page</h1>
			{planets.map((planet) => (
				<div key={planet.id}>
					<h3>{planet.name}</h3>
					{Object.entries(planet).map(([key, value]) => {
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

export default PlanetsPage
