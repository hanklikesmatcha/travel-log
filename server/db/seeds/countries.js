/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('countries').del()
  await knex('countries').insert([
    { id: 1, country: 'Spain' },
    { id: 2, country: 'USA' },
    { id: 3, country: 'South Korea' },
  ])
}
