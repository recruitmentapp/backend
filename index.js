const server = require("./server.js");

const PORT = process.env.PORT || 5000;
const secret = process.env.SECRET_THING || "foo";

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`.random);
});
