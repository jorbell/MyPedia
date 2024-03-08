const { Sequelize, DataTypes, QueryTypes } = require('sequelize')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())


let tasker = new Sequelize(
      //process.env.DEV_DATABASE,
      "tasker",
      process.env.DEV_DBUSER,
      process.env.DEV_DBPASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      logging:true
    }
  )

//Initialize connection
let library = null;
if(process.env.NODE_ENV === "DEV"){
  library = new Sequelize(
      process.env.DEV_DATABASE,
      process.env.DEV_DBUSER,
      process.env.DEV_DBPASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      logging:true
    }
  )
}
else {
  library = new Sequelize(
      process.env.DATABASE,
      process.env.DBUSER,
      process.env.DBPASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      logging:false
    }
  )
}

//Create models for library
const Book  = library.define('book', {
  name: {type: DataTypes.STRING },
  displayname: {type: DataTypes.STRING }
},{ sequelize: library, modelName: 'book' })

const Chapter = library.define('chapter', {
  name: {type: DataTypes.STRING },
  bookid: {type:DataTypes.INTEGER },
  displayname: {type: DataTypes.STRING },
  content: {type: DataTypes.STRING },
},{ sequelize: library, modelName: 'Chapter' })

Book.hasMany(Chapter)
Chapter.belongsTo(Book)

//Create models for tasker

const Project  = tasker.define('project', {
  title: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING }
},{ sequelize: library, modelName: 'task' })

const Task = tasker.define('task', {
  title: {type: DataTypes.STRING },
  projectid: {type:DataTypes.INTEGER },
  state: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING },
},{ sequelize: library, modelName: 'Chapter' })

Project.hasMany(Task)
Task.belongsTo(Project)


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
  //let newTask = Task.build(req.body)
  //await newTask.save();
  //const projects = await Project.findAll({include: Task})
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
  console.log("moro")
  console.log("moro")
  console.log("moro")
  console.log("moro")
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
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
