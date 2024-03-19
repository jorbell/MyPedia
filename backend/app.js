const express = require('express')
const app = express()
const cors = require('cors')
const taskerRouter = require('./controllers/Tasker')
const libraryRouter = require('./controllers/Library')
const middleware = require('./utils/middleware')



app.use(cors())
app.use(express.json())

app.use('/api/tasker', taskerRouter)
app.use('/api/library', libraryRouter)

app.use(express.static('build'))
app.use(middleware.unknownEndpoint)


module.exports = app

