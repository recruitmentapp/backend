const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../routers/users/users-model");
const { isValid } = require("../routers/users/users-service");
const { jwtSecret } = require("./secrets");

router.post("/register", (req, res) => {
  const credentials = req.body;
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide email and password and the password should be alphanumeric",
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (isValid(req.body)) {
    Users.findBy({ email: email })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeToken(user);
          res.status(200).json({ message: "Welcome to our API", token, user });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide email and password and the password should be alphanumeric",
    });
  }
});

function makeToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const options = {
    expiresIn: "1 day",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
