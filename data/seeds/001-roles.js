exports.seed = function (knex) {
  return knex("roles").insert([
    { role_name: "admin" },
    { role_name: "applicant" },
    { role_name: "referral" },
  ]);
};
