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
    const todo = todoList.find(item => item.id === todoID)
    if(!todo){
        return res.status(404).json({error: `Todo item ${todoID} does not exist`})
    }
    res.json(todo)
}) //get one todo

app.post('/api/todo', (req, res) => {
    const { title, description, status, dueDate } = req.body //get the post request details

    if(!title){
        return res.status(400).json({error: `Title is required`})
    }// validation checks

    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        description: description,
        status: status,
        dueDate: dueDate
    } // Create a newTodo object

    todoList.push(newTodo) //Push to array

    res.status(201).json(newTodo)// 
})

app.put('/api/todo/:id', (req, res) => {
    const todoId = req.params.id
    const todo = todoList.find(item => item.id === todoId)
    const { title, description, status, dueDate } = req.body

    if(!todo){
        return res.status(400).json({error: `Todo Item ${todoId} not found`})
    }
    // update the object
    


})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))