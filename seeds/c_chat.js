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
        product_id: '7df72176-7064-4c9b-adc7-c406e3da0b47',
        message: 'Hi, is this still available',
        room: 'a0e58318-1dac-492f-8b96-c880929fa416',
        user_name: 'Frank',
        email: 'frank@gmail.com',
      },
      {
        id: '25131af4-11dc-4221-a74e-50e5a9531bd0',
        product_id: 'ce9c3ecf-c766-4421-b70e-3e79a485bfa3',
        message: 'Hi, is this still available',
        room: 'd83507e9-f103-4a1e-9231-44e97b3c297d',
        user_name: 'Jason Data',
        email: 'jason@gmail.com',
      },
      {
        id: '97cb082b-621a-494c-bae6-34f8723433db',
        product_id: '48aa03d1-8fae-4979-87f8-31798a29d9f5',
        message: 'Hi, is this still available',
        room: 'caed0924-c9c1-4bed-bec3-458c708668f1',
        user_name: 'Brock Kelly',
        email: 'brock@gmail.com',
      },
    ]);
  };