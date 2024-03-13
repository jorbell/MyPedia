require('dotenv').config

let PORT            = process.env.PORT
let HOST            = process.env.HOST
let DIALECT         = process.env.DIALECT
let DBUSER          = process.env.DBUSER
let LIBRARY         = process.env.LIBRARY
let TASKER          = process.env.TASKER
let DBPASSWORD      = process.env.DBPASSWORD
let DEV_DBUSER      = process.env.DEV_DBUSER
let DEV_DATABASE    = process.env.DEV_DATABASE
let DEV_DBPASSWORD  = process.env.DEV_DBPASSWORD
let NODE_ENV        = process.env.NODE_ENV

module.exports = {
  PORT,
  HOST,
  DIALECT,
  DBUSER,
  LIBRARY,
  TASKER,
  DBPASSWORD,
  DEV_DBUSER,
  DEV_DATABASE,
  DEV_DBPASSWORD,
  NODE_ENV,
}

