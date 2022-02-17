const router = require("express").Router();
const NewsApi = require("newsapi");

const newsApi = new NewsApi("9d662556d4944aaaa71c567219994789");


let url =`https://newsapi.org/v2/everything?q=Apple&from=2022-02-16&sortBy=popularity&${newsApi}`


router.get("/", (req, res) => {
  res.render(`index`, {});
});

router.get("/news", (req, res) => {
  const {country} = req.query;
  console.log(req.query)

  newsApi.v2
    .topHeadlines({
      country,
      category: "business",
    })
    .then((response) => {
      // console.log(response);
      // const obj = JSON.stringify(response.articles);
      // const filteredArticles = response.articles.filter(article => article.country === country)
      console.log(response.articles) 
      res.render("news", {
        response: response.articles,
        
      });
    });
});

module.exports = router;
