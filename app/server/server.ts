import express from 'express';
import dotenv from 'dotenv'
import { todoList } from './src/data/todoData';

dotenv.config()

const PORT = process.env.LOCAL_PORT

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'API working'})
})

app.get('/api/todo', (req, res) => {
    res.json(todoList)
})// get all todos

app.get('/api/todo/:id', (req, res) => {
    const todoID = req.params.id
    const todo = todoList.find(item => item.id === Number(todoID))
    if(!todo){
        res.status(404).json(`Todo item ${todoID} does not exist`)
    }
    res.json(todo)
}) //get one todo

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))