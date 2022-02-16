const router = require("express").Router();
const NewsApi = require("newsapi");

const newsApi = new NewsApi("9d662556d4944aaaa71c567219994789");

router.get("/", (req, res) => {
  res.render(`index`, {});
});

router.get("/news", (req, res) => {
  newsApi.v2
    .topHeadlines({
      country: "us",
      category: "business",
    })
    .then((response) => {
      // console.log(response);
      // const obj = JSON.stringify(response.articles);

      res.render("news", {
        response: response.articles,
      });
    });
});

module.exports = router;
