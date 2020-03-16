const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const slug = require('slug');
const multer = require('multer');
const routes = require('./routes.js')
const app = express();
const port = 3001;
const mongo = require('mongodb');
require('dotenv').config();
let url =  process.env.DB_URL;


app
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')
    .use(routes)

   
    mongo.MongoClient.connect(url, function (err, client) {
      if (err) {
        throw err;
      }
      db = client.db(process.env.DB_NAME);
      console.log('Connected to database');

    })
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));