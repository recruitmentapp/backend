exports.seed = function (knex) {
  return knex("companies").insert([
    {
      company_name: "justin inc",
      main_contact: "justin",
      email: "justin@justin.com",
      phone_number: 01234567,
      address: "123 fake st",
      city: "kansas",
      state: "michigan",
      country: "murica",
    },
    {
      company_name: "will inc",
      main_contact: "will",
      email: "will@will.com",
      phone_number: 01234566,
      address: "123 fake st",
      city: "kansas",
      state: "michigan",
      country: "murica",
    },
    {
      company_name: "mike inc",
      main_contact: "mike",
      email: "mike@mike.com",
      phone_number: 01234565,
      address: "123 fake st",
      city: "kansas",
      state: "michigan",
      country: "murica",
    },
  ]);
};
