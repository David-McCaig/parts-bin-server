/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('chat').del();
    await knex('chat').insert([
      {
        id: '0a09308f-e60c-4e76-a4d9-28b389d916c1',
        product_id: '3b16f79c-4efd-43ee-8ec4-a65439d5fe5e',
        message: 'Hello parts bin test',
        room: 'a0e58318-1dac-492f-8b96-c880929fa416',
        user_name: 'Frank',
        email: 'frank@gmail.com',
      },
      {
        id: '25131af4-11dc-4221-a74e-50e5a9531bd0',
        product_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        message: 'Hello parts bin test dave',
        room: 'd83507e9-f103-4a1e-9231-44e97b3c297d',
        user_name: 'dave',
        email: 'dave@gmail.com',
      },
      {
        id: '97cb082b-621a-494c-bae6-34f8723433db',
        product_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        message: 'Hello parts bin test dave',
        room: 'd83507e9-f103-4a1e-9231-44e97b3c297d',
        user_name: 'frank',
        email: 'frank@gmail.com',
      },
    ]);
  };