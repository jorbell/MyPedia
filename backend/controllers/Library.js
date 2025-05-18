const {Book, Chapter} = require('../models/Library')
const libraryRouter = require('express').Router()

libraryRouter.put('/chapters/:id', async (req,res) => {
  const cid = req.params.id
  const newContent = req.body.newContent;
  const newName = req.body.name
  await Chapter.update(
    {content: newContent, name: newName, displayname: newName},
    {where: {id: cid}}
  )
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Get all books
libraryRouter.get('/books', async (req, res) => {
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Create a book
libraryRouter.post('/books', async (req, res) => {
  const newBook = Book.build({"name": req.body.newContent, "displayname": req.body.newContent})
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
libraryRouter.post('/chapters', async (req, res) => {
  const newChapter = Chapter.build({
    name: req.body.name,
    bookid: req.body.bookid,
    displayname: req.body.name,
    content: "",
  })
  await newChapter.save();
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})

//Delete chapter
libraryRouter.put('/chapter/delete/:id', async (req, res) => {
  await Chapter.destroy({
    where: {
      id: req.body.id
    },
  })
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})
//Update chapter
libraryRouter.put('/chapters/:id', async (req,res) => {
  const cid = req.params.id
  const newContent = req.body.newContent;
  const newName = req.body.name
  await Chapter.update(
    {content: newContent, name: newName, displayname: newName},
    {where: {id: cid}}
  )
  const books = await Book.findAll({include: Chapter})
  res.json(books)
})
module.exports = libraryRouter
