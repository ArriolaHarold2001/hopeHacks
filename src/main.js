const express = require("express");
const router = require("./routes");
const ejs = require("ejs");

const app = express();
app.use(express.static(`${__dirname}/views`));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/api", router);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
