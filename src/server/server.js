const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const directoryPath = path.join(__dirname, 'data')

app.get('/api/jsons', (req, res) => {
	const directoryPath = path.join(__dirname, '..', 'data')

	fs.readdir(directoryPath, (err, files) => {
		if (err) {
			console.error('Error reading directory:', err)
			res.status(500).json({ error: 'Internal server error' })
			return
		}
		const jsonFiles = files.filter((file) => file.endsWith('.json')).map((file) => file.replace('.json', ''))
		res.json(jsonFiles)
	})
})

// Serve the React application
app.use(express.static(path.join(__dirname, 'build')))

// Handle other routes by serving the React application
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Start the server
const port = process.env.PORT || 3001
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
