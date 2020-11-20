const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Classes.findByUserId(id)
    .then((classes) => {
      Users.findById(id)
        .then((users) => {
          res.status(200).json({ ...users, classes });
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

router.get("/roles", (req, res) => {
  Users.fetchRoles()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  Users.add(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;
