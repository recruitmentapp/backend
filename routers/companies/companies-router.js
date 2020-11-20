const router = require("express").Router();

const Companies = require("./companies-model");

router.get("/", (req, res) => {
  Companies.find()
    .then((companies) => {
      res.status(200).json(companies);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Companies.findById(req.params.id)
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newCompany = req.body;
  Companies.add(newCompany)
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((err) => {
      res.status(500).json({ message: err, request: req.body });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Companies.findById(id)
    .then((company) => {
      if (company) {
        return Companies.update(changes, id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find company with given id" });
      }
    })
    .then((updatedCompany) => {
      res.json(updatedCompany);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Companies.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res
          .status(404)
          .json({ message: "Could not find company with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete company" });
    });
});

module.exports = router;
