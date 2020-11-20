exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (roles) => {
      roles.increments();
      roles.string("role_name", 128).notNullable().unique();
    })
    .createTable("companies", (companies) => {
      companies.increments();
      companies.string("company_name", 128).notNullable().unique();
      companies.string("main_contact", 128).notNullable();
      companies.string("email", 128).notNullable().unique();
      companies.integer("phone_number", 15).notNullable().unique();
      companies.string("address", 128).notNullable();
      companies.string("city", 128).notNullable();
      companies.string("state", 128).notNullable();
      companies.string("country", 128).notNullable();
    })
    .createTable("users", (users) => {
      users.increments();
      users.string("name", 128).notNullable().unique();
      users.string("job_title", 128).notNullable();
      users.string("email", 128).notNullable().unique();
      users.integer("phone_number", 15).notNullable().unique();
      users.string("address", 128).notNullable();
      users.string("city", 128).notNullable();
      users.string("state", 128).notNullable();
      users.string("country", 128).notNullable();
      users.string("resume", 500).notNullable();
      users
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("jobs", (jobs) => {
      jobs.increments();
      jobs.string("industry", 128).notNullable();
      jobs.string("job_title", 128).notNullable();
      jobs.integer("salary").notNullable();
      jobs.string("description", 10000).notNullable();
      jobs
        .integer("company_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("companies")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("users_to_jobs", (users_to_jobs) => {
      users_to_jobs.increments();
      users_to_jobs
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      users_to_jobs
        .integer("job_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("jobs")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      users_to_jobs.integer("progress");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users_to_jobs")
    .dropTableIfExists("jobs")
    .dropTableIfExists("users")
    .dropTableIfExists("companies")
    .dropTableIfExists("roles");
};
