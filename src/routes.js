const router = require("express").Router();
const NewsApi = require("newsapi");

const newsApi = new NewsApi("9d662556d4944aaaa71c567219994789");

router.get("/", (req, res) => {
  newsApi.v2
    .topHeadlines({
      language: "en",
    })
    .then((response) => {
      // console.log(response.articles);
      // const obj = JSON.stringify(response.articles);

      res.render("index", {
        response: response.articles,
      });
    });
});

module.exports = router;
