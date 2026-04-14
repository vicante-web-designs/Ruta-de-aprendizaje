const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    res.json({message: 'Thank you', confirmation: 'Yay, I hit an endpoint'})
})

app.get('/dashboard', (req, res) => {
    console.log('Oooooohhhhhh, now i hit the dashboard endpoint')
    res.json({message: 'Oooooohhhhhh, now i hit the dashboard endpoint'})
})

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`))