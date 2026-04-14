const express = require('express')
const app = express()
const PORT = 8383

let data = [
    {
        name: 'james',
        email: 'james@example.com'
    },
]

// middleware
app.use(express.json())

//WEBSITE endpoints
app.get('/', (req, res) => {
  res.send(`
     <body style='background:pink;color:blue;'>
        <h1>DATA:</h1>
        <p>
            ${JSON.stringify(data)}
        </p>
     </body>
    `)
})

app.get('/dashboard', (req, res) => {
  res.send('<h1>Dashboard</h1>')
})

//API endpoints
app.get('/api/data', (req, res) => {
  res.send(data)
})

app.post('/api/users', (req, res) => {
  const newData = req.body
  console.log(newData)
  data.push(newData)
  res.status(201).json(data)
})

app.delete('/api/users', (req, res) => {
  data.pop()

  res.status(200).json(data)
})

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`))