const express = require("express");
const axios = require("axios").default;
const path = require("path");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../index.html"));
  } catch (err) {
    throw err;
  }
});
const getArticleData = async () => {
  try {
    app.get("/api/news/:country/:category/:q?", async (req, res) => {
      const country = req.params.country;
      const category = req.params.category;
      const q = req.params.q;
      let response;

      if (!q) {
        response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9d662556d4944aaaa71c567219994789`
        );
      }

      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&${q}&apiKey=9d662556d4944aaaa71c567219994789`
      );
      const artPointer = Math.floor(
        Math.random() * response.data.articles.length
      );

      res.status(200).json(response.data.articles[artPointer]);
    });
  } catch (err) {
    throw err;
  }
};

getArticleData();

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
