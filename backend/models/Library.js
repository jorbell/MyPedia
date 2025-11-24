const { Sequelize, DataTypes } = require('sequelize')
const config = require('../utils/config')
const logger = require('../utils/logger')

const dbConfig = config.library
/*
  config.NODE_ENV === 'DEV'
    ? config.libraryDev
    : config.NODE_ENV == 'TEST'
      ? config.libraryTest
      : config.NODE_ENV == 'DOCKER'
        ? config.libraryDocker
        : config.library
*/

const library = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.pwd, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: (...msg) => logger.sequelizeLogger(msg),
  pool: {
    max: 10,
    min: 0,
    idle: parseInt(dbConfig.idle),
  },
})

//Create models for library
const Book = library.define(
  'book',
  {
    name: { type: DataTypes.STRING },
    displayname: { type: DataTypes.STRING },
  },
  { sequelize: library, modelName: 'book' }
)

const Chapter = library.define(
  'chapter',
  {
    name: { type: DataTypes.STRING },
    bookid: { type: DataTypes.INTEGER },
    displayname: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
  },
  { sequelize: library, modelName: 'Chapter' }
)

Book.hasMany(Chapter)
Chapter.belongsTo(Book)

module.exports = {
  Book,
  Chapter,
}
