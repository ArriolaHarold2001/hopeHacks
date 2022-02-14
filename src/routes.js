const router = require("express").Router();

const apiKey = "9d662556d4944aaaa71c567219994789";
const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-02-14&sortBy=popularity&apiKey=${apiKey}`;

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

module.exports = router;
