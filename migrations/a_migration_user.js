/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {
      table.uuid('id').primary();
      table.string('customer_name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('phone').notNullable();
      table.string('address').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('user');
  };
  
