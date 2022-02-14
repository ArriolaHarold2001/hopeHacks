const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", router);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
