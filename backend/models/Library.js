const { Sequelize, DataTypes} = require('sequelize')


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
      process.env.LIBRARY,
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

module.exports = {
  Book, Chapter
}
