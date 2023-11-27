const { Sequelize, DataTypes, QueryTypes } = require('sequelize')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


//Initialize connection
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: false
  }
)

//Create models
const Book  = sequelize.define('book', {
  name: {type: DataTypes.STRING },
  displayname: {type: DataTypes.STRING }
},{ sequelize, modelName: 'book' })

const Page = sequelize.define('page', {
  name: {type: DataTypes.STRING },
  bookid: {type:DataTypes.INTEGER },
  displayname: {type: DataTypes.STRING },
  content: {type: DataTypes.STRING },
  frontpage: {type: DataTypes.BOOLEAN }
},{ sequelize, modelName: 'page' })

Book.hasMany(Page)
Page.belongsTo(Book)



//Get all books
app.get('/api/books', async (req, res) => {
  const books = await Book.findAll({include: Page})
  res.json(books)
})

//Create a book
app.put('/api/books', async (req, res) => {
  let newBook = Book.build({"name": req.body.newContent, "displayname": req.body.newContent})
  await newBook.save();
  const newPage = Page.build({
    name: "frontpage",
    bookid: newBook.id,
    displayname: "Frontpage",
    content: "Front page",
    frontpage: 1 
  })
  await newPage.save();
  const books = await Book.findAll({include: Page})
  res.json(books)
})

//Create page
app.put('/api/pages', async (req, res) => {
  let newPage = Page.build({
    name: req.body.name,
    bookid: req.body.bookid,
    displayname: req.body.name,
    content: "",
    frontpage: 0 
  })
  await newPage.save();
  const books = await Book.findAll({include: Page})
  res.json(books)
})

//Update page
app.put('/api/pages/:id', async (req,res) => {
  let cid = req.params.id
  let newContent = req.body.newContent;
  Page.update(
    {content: newContent},
    {where: {id: cid}}
  )
  res.json("success")
})
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
