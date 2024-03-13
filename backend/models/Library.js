const { Sequelize, DataTypes} = require('sequelize')
const config = require('../utils/config')

let library = null;
if(config.NODE_ENV === "DEV"){
  library = new Sequelize(
      config.DEV_DATABASE,
      config.DEV_DBUSER,
      config.DEV_DBPASSWORD,
    {
      host: config.HOST,
      dialect: config.DIALECT,
      logging:true
    }
  )
}
else {
  library = new Sequelize(
      config.LIBRARY,
      config.DBUSER,
      config.DBPASSWORD,
    {
      host: config.HOST,
      dialect: config.DIALECT,
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

module.exports = {
  Book, Chapter
}
