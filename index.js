const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const slug = require('slug');
const multer = require('multer');
const app = express();
const port = 3001;
const mongo = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
let url = process.env.DB_URL;


app
  .set('view engine', 'ejs')
  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({
    extended: true
  }))
  //.use(routes)  
  .get('/', form)
  .post('/insert', insert)
  .get("/:id", profile);




function insert(req, res, next) {
  db.collection('user_data').insertOne({
    name: req.body.name,
    age: req.body.age,
    residence: req.body.residence,
    gender: req.body.residence,
    interest: req.body.interest,
    music_genre: req.body.genre
  }, completed)

  function completed(err, data) {
    if (err) {
      next(err)
    } else {
      res.redirect('/' + data.insertedId)
    }
  }
}

function profile(req, res, next) {
  const id = req.params.id
  db.collection('user_data').findOne({
    _id: mongo.ObjectID(id)
  }, done)



  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.render('pages/profile', {
        data: data
      })
    }
  }
}




function form(req, res) {
  res.render('pages/upload');
}



mongo.MongoClient.connect(url, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(process.env.DB_NAME);


})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));