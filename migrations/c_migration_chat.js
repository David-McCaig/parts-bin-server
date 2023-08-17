/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('chat', (table) => {
      table.uuid('id').primary();
      table
      .uuid('product_id')
      .references('product.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.string('user_id').notNullable();
      table.string('message').notNullable();
      table.string('room').notNullable();
      table.string('user_name').notNullable();
      table.string("email").notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('chat');
  };
