const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function add(company) {
  return db("companies")
    .insert(company, "id")
    .then(() => find());
}

function find() {
  return db("companies").orderBy("id");
}

function findBy(filter) {
  return db("companies").where(filter).orderBy("id");
}

function findById(id) {
  return db("companies").where({ id }).first();
}

function update(changes, id) {
  return db("companies")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("companies")
    .where({ id })
    .del()
    .then(() => find());
}
