require('dotenv').config()

//Backend port number
let PORT            = process.env.PORT
//Node environment ( DEV | TEST | LIVE )
let NODE_ENV        = process.env.NODE_ENV

//Host address
let HOST            = process.env.HOST

//Database dialect
let DIALECT         = process.env.DIALECT

//Databse names:
//Live
let LIBRARY         = process.env.LIBRARY
let TASKER          = process.env.TASKER
//Development
let LIBRARY_DEV     = process.env.LIBRARY_DEV
let TASKER_DEV      = process.env.TASKER_DEV
//Test
let LIBRARY_TEST     = process.env.LIBRARY_TEST
let TASKER_TEST      = process.env.TASKER_TEST

//User credentials
//Live
let DBUSER          = process.env.DBUSER
let DBPASSWORD      = process.env.DBPASSWORD
//Development
let DBUSER_DEV      = process.env.DBUSER_DEV
let DBPASSWORD_DEV  = process.env.DBPASSWORD_DEV
//Test
let DBUSER_TEST      = process.env.DBUSER_TEST
let DBPASSWORD_TEST  = process.env.DBPASSWORD_TEST

let IDLE            = process.env.IDLE
let IDLE_TEST       = process.env.IDLE_TEST

//DOCKER
let DBUSER_DOCKER   = process.env.DBUSER_DOCKER
let DBPASSWORD_DOCKER = process.env.DBPASSWORD_DOCKER




const library = {
  database: LIBRARY,
  user: DBUSER,
  pwd: DBPASSWORD,
  idle: IDLE,
  dialect: DIALECT,
  host: HOST,
}
const libraryDev = {
  database: LIBRARY_DEV,
  user: DBUSER_DEV,
  pwd: DBPASSWORD_DEV,
  idle: IDLE,
  dialect: DIALECT,
  host: HOST
}
const libraryTest = {
  database: LIBRARY_TEST,
  user: DBUSER_TEST,
  pwd: DBPASSWORD_TEST,
  idle: IDLE_TEST,
  dialect: DIALECT,
  host: HOST
}
const tasker = {
  database: TASKER,
  user: DBUSER,
  pwd: DBPASSWORD,
  idle: IDLE,
  dialect: DIALECT,
  host: HOST
}
const taskerDev = {
  database: TASKER_DEV,
  user: DBUSER_DEV,
  pwd: DBPASSWORD_DEV,
  idle: IDLE,
  dialect: DIALECT,
  host: HOST
}
const taskerTest = {
  database: TASKER_TEST,
  user: DBUSER_TEST,
  pwd: DBPASSWORD_TEST,
  idle: IDLE_TEST,
  dialect: DIALECT,
  host: HOST
}
const libraryDocker = {
  database: LIBRARY,
  user: DBUSER_DOCKER,
  pwd: DBPASSWORD_DOCKER,
  idle: IDLE,
  dialect: DIALECT,
  host: "database"
}
const taskerDocker = {
  database: TASKER,
  user: DBUSER_DOCKER,
  pwd: DBPASSWORD_DOCKER,
  idle: IDLE,
  dialect: DIALECT,
  host: "database"
}

module.exports = {
  PORT,
  NODE_ENV,
  library,
  libraryDev,
  libraryTest,
  libraryDocker,
  tasker,
  taskerDev,
  taskerTest,
  taskerDocker
}

