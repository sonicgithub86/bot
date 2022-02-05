require('dotenv').config()
const db = require('../db')

const { NODE_ENV = 'development' } = process.env

module.exports = {
  host: 'localhost',
  db: db[NODE_ENV],
}
