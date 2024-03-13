const { Sequelize, DataTypes} = require('sequelize')

const config = require('../utils/config')

const tasker = new Sequelize(
      //process.env.DEV_DATABASE,
      config.TASKER,
      config.DEV_DBUSER,
      config.DEV_DBPASSWORD,
    {
      host: config.HOST,
      dialect: config.DIALECT,
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
