const router = require("express").Router();
const request = require("request");

const apiKey = "9d662556d4944aaaa71c567219994789";
const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-02-14&sortBy=popularity&apiKey=${apiKey}`;

router.get("/", (req, res) => {
  const reqs = request(url, (err, res, body) => {
    if (err) {
      return;
    } else {
      return body;
    }
  });
  res.status(200).send(reqs);
});

module.exports = router;
