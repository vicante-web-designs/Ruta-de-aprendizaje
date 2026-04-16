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
  // your code here
})

router.post('/', (req, res) => {
  // your code here
})

router.put('/:id', (req, res) => {
  // your code here
})

router.delete('/:id', (req, res) => {
  // your code here
})

export default router