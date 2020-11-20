exports.seed = function (knex) {
  return knex("jobs").insert([
    {
      industry: "security",
      job_title: "security engineer",
      salary: 180000,
      description: "test test test",
      company_id: 1,
    },
    {
      industry: "goverment",
      job_title: "civil servant",
      salary: 60000,
      description: "test test test",
      company_id: 2,
    },
    {
      industry: "tech",
      job_title: "full stack software engineer",
      salary: 100000,
      description: "test test test",
      company_id: 3,
    },
  ]);
};
