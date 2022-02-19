const express = require("express");
const axios = require("axios").default;
const path = require("path");
const http = require("http");
require("dotenv").config();

const app = express();
http.Server(app);
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

const apiKey = process.env.APIKEY;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

const getArticleData = async () => {
  try {
    app.get("/api/news/:country/:category", async (req, res) => {
      const country = req.params.country;
      const category = req.params.category;
      let response;

      response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
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
