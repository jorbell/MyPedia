require('dotenv').config

let PORT = process.env.PORT
let HOST = process.env.HOST
let DIALECT = process.env.DIALECT
let DBUSER = process.env.DBUSER
let LIBRARY = process.env.DATABASE
let DBPASSWORD = process.env.DBPASSWORD
let DEV_DBUSER      = process.env.DEV_DBUSER
let DEV_DATABASE    = process.env.DEV_DATABASE
let DEV_DBPASSWORD  = process.env.DEV_PASSWORD

module.exports = {
  PORT,
  HOST,
  DIALECT,
  DBUSER,
  LIBRARY,
  DBPASSWORD,
  DEV_DBUSER,
  DEV_DATABASE,
  DEV_DBPASSWORD
}

