const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())

// Temporary in-memory tasks (like your useState)
let tasks = [
  { id: 1, text: "Complete project proposal", completed: false },
  { id: 2, text: "Review team feedback", completed: true },
  { id: 3, text: "Schedule client meeting", completed: false },
]

// Routes
app.get("/tasks", (req, res) => {
  res.json(tasks)
})

app.post("/tasks", (req, res) => {
  const { text } = req.body
  if (!text) return res.status(400).json({ error: "Task text is required" })
  const newTask = { id: Date.now(), text, completed: false }
  tasks.push(newTask)
  res.json(newTask)
})

app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params
  const { completed } = req.body
  const task = tasks.find((t) => t.id == id)
  if (!task) return res.status(404).json({ error: "Task not found" })
  if (typeof completed === "boolean") task.completed = completed
  res.json(task)
})

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params
  tasks = tasks.filter((t) => t.id != id)
  res.json({ success: true })
})

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`))
