
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('avatar');
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
