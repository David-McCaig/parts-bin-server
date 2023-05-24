/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: 'parts_bin',
    charset: 'utf8',
  },
  migrations: {
    directory: './',
  },
  seeds: {
    directory: '/Users/user/Desktop/BrainStation/projects/parts-bin/parts-bin/server/seeds',
  }
};


