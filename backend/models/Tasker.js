const { Sequelize, DataTypes} = require('sequelize')
const config = require('../utils/config')
const logger = require('../utils/logger')


if(config.NODE_ENV === "DEV")
  db = require('../utils/config').taskerDev
else if (config.NODE_ENV === "TEST")
  db = require('../utils/config').taskerTest
else
  db = require('../utils/config').tasker

const tasker = new Sequelize(
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
    },
  )

const Project  = tasker.define('project', {
  title: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING }
},{ sequelize: tasker, modelName: 'project' })

const Sprint = tasker.define('sprint', {
  title: {type: DataTypes.STRING },
  projectid: {type:DataTypes.INTEGER },
  description: {type: DataTypes.STRING },
},{ sequelize: tasker, modelName: 'sprint' })

const Task = tasker.define('task', {
  title: {type: DataTypes.STRING },
  projectid: {type:DataTypes.INTEGER },
  sprintid: {type:DataTypes.INTEGER },
  state: {type: DataTypes.STRING },
  description: {type: DataTypes.STRING },
},{ sequelize: tasker, modelName: 'task' })

Project.hasMany(Sprint)
Sprint.hasMany(Task)
Task.belongsTo(Sprint)
Sprint.belongsTo(Project)

module.exports = {
   Project, Sprint, Task
}
