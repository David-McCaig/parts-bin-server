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
        user_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        product_id: '7df72176-7064-4c9b-adc7-c406e3da0b47',
        message: 'Hi, is this still available',
        room: 'a0e58318-1dac-492f-8b96-c880929fa416',
        user_name: 'Frank',
        email: 'frank@gmail.com',
      },
      {
        id: '25131af4-11dc-4221-a74e-50e5a9531bd0',
        user_id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        product_id: 'bdc6bb69-e09c-498d-8abd-be2792504d00',
        message: 'Hi, is this still available',
        room: 'd83507e9-f103-4a1e-9231-44e97b3c297d',
        user_name: 'Jason Data',
        email: 'jason@gmail.com',
      },
      {
        id: '97cb082b-621a-494c-bae6-34f8723433db',
        user_id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
        product_id: 'f3e13429-b5e9-4a50-b01c-75fb07cefced',
        message: 'Hi, is this still available',
        room: 'caed0924-c9c1-4bed-bec3-458c708668f1',
        user_name: 'Brock Kelly',
        email: 'brock@gmail.com',
      },
      {
        id: 'f5583257-e222-4d78-b0fd-046c5f5b5934',
        user_id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        product_id: 'a193a6a7-42ab-4182-97dc-555ee85e7486',
        message: 'Hi, is this still available',
        room: '0e3c1f18-fe0e-48eb-8473-d9bcf6c32f80',
        user_name: 'Gerry Roach',
        email: 'gerry@gmail.com',
      },
    ]);
  };