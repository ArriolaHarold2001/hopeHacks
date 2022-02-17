const express = require("express");
// const router = require("./routes");
const axios = require("axios").default;
const ejs = require("ejs");

const app = express();
app.use(express.static(`${__dirname}/views`));
app.use(express.json());

app.set("view engine", "ejs");
// app.use("/api", router);

const getArticleData = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-02-16&sortBy=popularity&apiKey=9d662556d4944aaaa71c567219994789`
    );
    const artPointer = Math.floor(Math.random() * res.data.articles.length);

    return {
      source: res.data.articles[artPointer].source.name,
      author: res.data.articles[artPointer].author,
      title: res.data.articles[artPointer].title,
      description: res.data.articles[artPointer].description,
      url: res.data.articles[artPointer].url,
      urlToImage: res.data.articles[artPointer].urlToImage,
      publishedAt: res.data.articles[artPointer].urlToImage,
      content: res.data.articles[artPointer].content,
    };
  } catch (err) {
    throw err;
  }
};

const renderData = async () => {
  const data = await getArticleData();
  app.get("/api/news", (req, res) => {
    res.render("news", {
      data,
    });
  });
};

renderData();

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
