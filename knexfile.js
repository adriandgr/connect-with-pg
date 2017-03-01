// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'w4d2',
      user:     'onzo',
      password: process.env.PG_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};