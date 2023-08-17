/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('product', (table) => {
      table.uuid('id').primary();
      table.string('user_id').notNullable();
      table.string('item_name').notNullable();
      table.string('description').notNullable();
      table.string('category').notNullable();
      table.string("image_path").notNullable();
      table.string('price').notNullable();
      table.string('user_email').notNullable();
      table.string('user_name').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('product');
  };
