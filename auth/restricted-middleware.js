const { jwtSecret } = require("./secrets.js");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "You need a token" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "This token is bad" });
    }
    req.decodedJwt = decoded;
    next();
  });
};
