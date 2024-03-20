const { test, after, beforeEach, describe } = require('node:test')
const supertest = require('supertest')

const {Book, Chapter} = require('../models/Library')

const app = require('../app')
const api = (supertest(app))

describe('Library tests' , () => {
  describe('Tests for books' , () => {
    beforeEach(async () => {
      await Chapter.destroy({
        where: {},
        truncate:false
      })
      await Book.destroy({
        where: {},
        truncate:false
      })
      const newBook = {
        name: "Moro",
        displayname: "Tere",
      }
      await Book.build(newBook).save()
      const books = await Book.findAll()

      const newChapter = {
        name: "Moro",
        bookid: books[0].id,
        displayname: "Juuh",
        content: "juuh"
      }
      await Chapter.build(newChapter).save()

    })
    test('Books are returned as json', async () => {
      await api
        .get('/api/library/books')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
  })
  /*
  describe('Tests for sprints' , () => {
    
  })
  describe('Tests for tasks' , () => {
    
  })
  */
})
after(async () => {
  app.close(done)
})
