const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    res.json({message: 'Thank you'})
})

app.listen(PORT, () => console.log(`Server is running at: ${PORT}`))