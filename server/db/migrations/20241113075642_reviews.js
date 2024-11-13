/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
  .createTable('reviews', function(table) {
    table.increments('id').primary()
    table.string('assetId').notNullable()
    table.string('hikeName').notNullable()
    table.integer('rating').notNullable()
    table.string('comment')
    table.string('author')
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('reviews')
};
