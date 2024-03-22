const config = require('../utils/config')

const info = (...params) => {
  if (config.NODE_ENV === "DEV")
    console.log(...params)
}
const error = (...params) => {
  if (config.NODE_ENV === "DEV")
    console.error(...params)
}
const sequelizeLogger = (...params) => {
  console.log(...params)
}
module.exports = {
  info, error, sequelizeLogger
}
