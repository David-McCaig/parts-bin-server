/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('user').del();
    await knex('user').insert([
      {
        id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
        public_id: '5cd8e88c-c1af-42c5-afed-a8dd128963b1',
        customer_name: 'Frank',
        email: 'frank@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '5bf7bd6c-2b16-4129-bddc-9d37ff8539e9',
        public_id: 'e9dfdd40-ee48-4710-8d5f-90bbdfcb16c3',
        customer_name: 'Jason Data',
        email: 'jason@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '90ac3319-70d1-4a51-b91d-ba6c2464408c',
        public_id: '4e26bde8-cf80-4485-a437-56c1c5f1f730',
        customer_name: 'Sean Rathbun',
        email: 'sean@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: 'bfc9bea7-66f1-44e9-879b-4d363a888eb4',
        public_id: 'e178fe29-3105-49cb-bc7a-f42ac8ce8e56',
        customer_name: 'Brock Kelly',
        email: 'brock@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '89898957-04ba-4bd0-9f5c-a7aea7447963',
        public_id: 'c5b2efd3-702e-48e6-b72e-0d4a1a53670f',
        customer_name: 'Gerry Roach',
        email: 'gerry@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: 'bb1491eb-30e6-4728-a5fa-72f89feaf622',
        public_id: 'fa62dc86-29f2-4590-b04d-4299f92a54ea',
        customer_name: 'Serena Pardy',
        email: 'serena@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7',
        public_id: '1af94654-cf05-433e-a823-7cf2ada30f61',
        customer_name: 'Danyal Ahmed',
        email: 'danyal@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '1f4a5687-be2a-4508-a2cd-7e039c0122a5',
        public_id: '0b7f777d-5b0b-4494-b037-d32a40e7636a',
        customer_name: 'Allan Dodds',
        email: 'allan@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: 'f4f1ac25-403a-4d6d-bdd3-a502026d5fff',
        public_id: '9a625e0f-ee00-4253-94e2-072e25b5b37d',
        customer_name: 'Karen Stafford',
        email: 'karen@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: 'd6984fbf-224f-4db5-8778-0c0e37a034a2',
        public_id: 'b555d692-dd4d-46a4-9d32-51f636f94f0c',
        customer_name: 'Rodrigo Ribeiro',
        email: 'rodrigo@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '12969746-4b1c-4f51-8e49-1a4c535423f8',
        public_id: 'e2524b24-a3a1-4c45-a313-86009c9298fb',
        customer_name: 'Cali Forni',
        email: 'cali@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
      {
        id: '26f54a7c-4e6b-4073-b487-cbfb6c018c2f',
        public_id: 'afd939f5-d4d6-4b6b-a553-6c3190250f4c',
        customer_name: 'Greg Petruzella',
        email: 'greg@gmail.com',
        phone: '416 316 8892',
        address: '294 St Clarens ave',
        password: '$2b$10$0ccVOoLpCb9ZElVPCoqW0eppaz6csBrL1DuANVzgXO.0NQCSgteti',
      },
    ]);
  };