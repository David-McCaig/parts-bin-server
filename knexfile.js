require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const {
DB_HOST,
DB_USER,
DB_PASSWORD,
DB_DATABASE
} = process.env
console.log(DB_DATABASE)

 module.exports = {
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    charset: 'utf8',
  },
  migrations: {
    directory: './',
  },
  seeds: {
    directory: '/Users/user/Desktop/BrainStation/projects/parts-bin/parts-bin/server/seeds',
  }
};


