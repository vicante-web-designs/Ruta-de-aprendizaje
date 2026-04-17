import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all todos
router.get('/', (req, res) => {
  const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`)

  const todos = getTodos.all(req.userId)

  res.json(todos)
})

//Get one todo
router.get('/:id', (req, res) => {
  
})

// Create a new todo
router.post('/', (req, res) => {
  // Get req body
  const { task } = req.body
  // post it to the db
  const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)

  insertTodo.run(req.user_id, task)

  res.json({id: insertTodo.lastID, task, completed: 0})
})

router.put('/:id', (req, res) => {
  // your code here
})

router.delete('/:id', (req, res) => {
  // your code here
})

export default router