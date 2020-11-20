const router = require("express").Router();

const Jobs = require("./jobs-model");

router.get("/", (req, res) => {
  Jobs.find()
    .then((Jobs) => {
      res.status(200).json(Jobs);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Jobs.findById(req.params.id)
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((err) => res.send(err));
});

router.post("/", (req, res) => {
  const newJob = req.body;
  Jobs.add(newJob)
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((err) => {
      res.status(500).json({ message: err, request: req.body });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Jobs.findById(id)
    .then((job) => {
      if (job) {
        return Jobs.update(changes, id);
      } else {
        res.status(404).json({ message: "Could not find J with given id" });
      }
    })
    .then((updatedJob) => {
      res.json(updatedJob);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Jobs.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ message: "Could not find job with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete job" });
    });
});

module.exports = router;
