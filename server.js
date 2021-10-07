const express = require("express");
const app = express();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9e116a9dc7ac451c91d21c54146b6a54');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/data", (req, res) => {
    newsapi.v2.topHeadlines({
      country: 'us',
      category: 'business',
      pageSize: 40
    }).then(news => res.send(news));
  });
  
  app.listen(3000, () => console.log('listening on port ' + 3000));