exports.seed = function (knex) {
  return knex("users_to_jobs").insert([
    {
      user_id: 1,
      job_id: 1,
      progress: "test1",
    },
    {
      user_id: 2,
      job_id: 2,
      progress: "test1",
    },
    {
      user_id: 3,
      job_id: 3,
      progress: "test1",
    },
  ]);
};
