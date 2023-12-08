const { Sequelize, DataTypes, QueryTypes } = require('sequelize')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())



//Initialize connection
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging:false
  }
)

//Create models
const Book  = sequelize.define('book', {
  name: {type: DataTypes.STRING },
  displayname: {type: DataTypes.STRING }
},{ sequelize, modelName: 'book' })

const Chapter = sequelize.define('chapter', {
  name: {type: DataTypes.STRING },
  bookid: {type:DataTypes.INTEGER },
  displayname: {type: DataTypes.STRING },
  content: {type: DataTypes.STRING },
},{ sequelize, modelName: 'Chapter' })

Book.hasMany(Chapter)
Chapter.belongsTo(Book)


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
