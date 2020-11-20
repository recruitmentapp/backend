const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  fetchRoles,
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(() => find());
}

function find() {
  return db("users")
    .select("id", "name", "email", "job_title", "city", "state", "country")
    .orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function fetchRoles() {
  return db("roles");
}
