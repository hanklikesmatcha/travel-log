/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cities').insert([
    { id: 1, city: 'Barcelona', country_id: 1 },
    { id: 2, city: 'NYC', country_id: 2 },
    { id: 3, city: 'Seoul', country_id: 3 },
  ])
}
