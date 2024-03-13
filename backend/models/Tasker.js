const { Sequelize, DataTypes} = require('sequelize')

const tasker = new Sequelize(
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

const Project  = tasker.define('project', {
  title: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING }
},{ sequelize: tasker, modelName: 'task' })

const Task = tasker.define('task', {
  title: {type: DataTypes.STRING },
  projectid: {type:DataTypes.INTEGER },
  state: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING },
},{ sequelize: tasker, modelName: 'Chapter' })

Project.hasMany(Task)
Task.belongsTo(Project)

module.exports = {
  Project, Task
}
