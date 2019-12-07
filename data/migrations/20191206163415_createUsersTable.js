exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username', 128)
        .notNullable()
        .unique();
    tbl.string('password', 128)
        .notNullable();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

// This file is autimatically generated based on dbConfig.js settings
// run 'npx knex migrate:make createUsersTable' to generate this file
// Then fill out the table creation logic
// Next run 'npx knex migrate:latest' to generate database 'auth.db3'