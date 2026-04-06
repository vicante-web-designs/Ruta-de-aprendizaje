import express from 'express';
const PORT = 8000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'API working'})
})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))