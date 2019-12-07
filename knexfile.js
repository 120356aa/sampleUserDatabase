module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/auth.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    }
};

// Required file that sets up the knex environment for you
// npx knex commands run based off of these settings