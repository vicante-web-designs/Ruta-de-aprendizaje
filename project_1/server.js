const express = require('express')
const app = express()
const PORT = 8383

const data = {
    name: 'Victory'
}

//WEBSITE endpoints
app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>')
})

app.get('/dashboard', (req, res) => {
  res.send('<h1>Dashboard</h1>')
})

//API endpoints
app.get('/api/data', (req, res) => {
  res.send(data)
})

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`))