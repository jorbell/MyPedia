const { Sequelize, DataTypes} = require('sequelize')
const config = require('../utils/config')
const logger = require('../utils/logger')

if(config.NODE_ENV === "DEV")
  db = require('../utils/config').libraryDev
else if (config.NODE_ENV === "TEST")
  db = require('../utils/config').libraryTest
else
  db = require('../utils/config').library
  

let library = new Sequelize(
    db.database,
    db.user,
    db.pwd,
  {
    host: db.host,
    dialect: db.dialect,
    logging: (...msg) => logger.sequelizeLogger(msg),
    pool: {
      max: 10,
      min: 0,
      idle: parseInt(db.idle)
    }
  }
)

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


module.exports = {
  Book, Chapter
}
