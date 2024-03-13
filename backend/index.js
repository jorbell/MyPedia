require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')

const {Project, Task} = require('./models/Tasker')
const {Book, Chapter} = require('./models/Library')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

//Get all projects
app.get('/api/projects', async (req, res) => {
  const projects = await Project.findAll({include: Task})
  res.json(projects)
})

//Create a project
app.put('/api/projects', async (req, res) => {
  let newProject = Project.build(req.body)
  await newProject.save();
  const projects = await Project.findAll({include: Task})
  res.json(projects);
})
//Create a task
app.put('/api/tasks', async (req, res) => {
  let newTask = Task.build(req.body)
  await newTask.save();
  const projects = await Project.findAll({include: Task})
  res.json(projects);
})
//Update a task
app.put('/api/tasks/:id', async (req, res) => {
  let cid = req.params.id
  let newTask = req.body
  await Task.update(
    newTask,
    {where: {id: cid}}
  )
  const projects = await Project.findAll({include: Task})
  res.json(projects);
})
app.put('/api/chapters/:id', async (req,res) => {
  let cid = req.params.id
  let newContent = req.body.newContent;
  let newName = req.body.name
  await Chapter.update(
    {content: newContent, name: newName, displayname: newName},
    {where: {id: cid}}
  )
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Get all books
app.get('/api/books', async (req, res) => {
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Create a book
app.put('/api/books', async (req, res) => {
  let newBook = Book.build({"name": req.body.newContent, "displayname": req.body.newContent})
  await newBook.save();
  const newChapter = Chapter.build({
    name: "First chapter",
    bookid: newBook.id,
    displayname: "Generated chapter",
    content: "Generated content",
  })
  await newChapter.save();
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Create chapter
app.put('/api/chapters', async (req, res) => {
  let newChapter = Chapter.build({
    name: req.body.name,
    bookid: req.body.bookid,
    displayname: req.body.name,
    content: "",
  })
  await newChapter.save();
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

app.get('/:id', async (req,res) => {
  res.redirect("http://localhost:3001");
})
//Delete chapter
app.put('/api/chapter/delete/:id', async (req, res) => {
  await Chapter.destroy({
    where: {
      id: req.body.id
    },
  })
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})
//Update chapter
app.put('/api/chapters/:id', async (req,res) => {
  let cid = req.params.id
  let newContent = req.body.newContent;
  let newName = req.body.name
  await Chapter.update(
    {content: newContent, name: newName, displayname: newName},
    {where: {id: cid}}
  )
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})
app.listen(config.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
