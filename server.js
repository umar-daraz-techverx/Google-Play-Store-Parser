const express = require('express');
const bodyParser = require('body-parser');
var gplay = require('google-play-scraper');


// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/topFree', (req, res) => {
   gplay.list({
        category: gplay.category.TOP_FREE,
        collection: gplay.collection.TOP_FREE,
        num: 10
      }).then(function(data)
      {
        res.json(data);
      });
    });
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});