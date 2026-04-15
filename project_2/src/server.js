import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5000

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

//Middlewares
// Serves our code from the public directory
app.use(express.json())
app.use(express.static(path.join(__dirName, '../public')))

// Serving up the HTML file from the directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirName, 'public', 'index.html'))
})

app.listen(PORT, () => console.log(`Listening to server: ${PORT}`))