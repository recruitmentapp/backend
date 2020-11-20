const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function add(job) {
  return db("jobs")
    .insert(job, "id")
    .then(() => find());
}

function find() {
  return db("jobs").orderBy("id");
}

function findBy(filter) {
  return db("jobs").where(filter).orderBy("id");
}

function findById(id) {
  return db("jobs").where({ id }).first();
}

function update(changes, id) {
  return db("jobs")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("jobs")
    .where({ id })
    .del()
    .then(() => find());
}
