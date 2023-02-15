exports.seed = async function (knex) {
  await knex('countries').del()
  await knex('cities').del()
}
