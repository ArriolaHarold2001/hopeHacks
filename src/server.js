const express = require("express");
const axios = require("axios").default;
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "public"));
// app.use("/public", express.static(path.join(__dirname, "public")));

const apiKey = process.env.APIKEY;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
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
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
        );
      }

      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&${q}&apiKey=${apiKey}`
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

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
