// Requiring the dependencies
const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const slug = require('slug');
const multer = require('multer');
const app = express();
const mongo = require('mongodb');
const mongoose = require('mongoose');

require('dotenv').config();

let url = process.env.DB_URL;
let db = null
const session = require('express-session')

// Lifetime of the session
const SESS_LIFETIME = 1000 * 60 * 60 * 2

app
  // set ejs view engine
  .set('view engine', 'ejs')

  // use express session to store session/cookies
  .use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
    }
  }))

  // Defining the folder where the static files are being stored.
  .use('/static', express.static('static'))

  // Bodyparser
  .use(bodyParser.urlencoded({
    extended: true
  }))

  // Routes

  .get('/', form)

  .post('/insert', insert)
  .get('/user/:id', profile)

  .get('/user/:id/edit', edit)
  .post('/update/:id', update)



function insert(req, res, next) {
  // Insert form data into the database
  db.collection('user_data').insertOne({
    name: req.body.name,
    residence: req.body.residence,
    music_genre: req.body.genre,
    fav_artist: req.body.artist,
    description: req.body.description
  }, completed)

  function completed(err, data) {
    if (err) {
      next(err)
    } else {

      // Set the req.session.user
      req.session.user = data.insertedId
      // Redirect to the corresponding profile 
      res.redirect('/user/' + data.insertedId)
    }
  }
}


async function profile(req, res) {
  try {
    console.log(req.session.user);
    const user = await db.collection('user_data').findOne({
      _id: mongo.ObjectID(req.session.user)
    });
    // Render profile with the matching data from the database
    res.render('pages/profile', {
      data: user

    })

  } catch (err) {
    console.error(err);
  }

}



function update(req, res, next) {
  const id = req.params.id
  db.collection('user_data').updateOne({
      _id: mongo.ObjectID(id)
    }, // Filter
    {
      $set: {
        // Update the data in database
        residence: req.body.residence,
        music_genre: req.body.genre,
        fav_artist: req.body.artist,
        description: req.body.description

      }
    }, completed

  )

  function completed(err, data) {
    if (err) {
      next(err)
    } else {
      // redirect to profile
      res.redirect('/user/' + id)
    }
  }
}



function edit(req, res, next) {
  const id = req.params.id
  db.collection('user_data').findOne({
    _id: mongo.ObjectID(id)
  }, done)


  function done(err, data) {
    if (err) {
      next(err);
    } else {
      //res.send(data)

      res.render('pages/edit', {
        data: data
      })
    }
  }
}







function form(req, res) {
  res.render('pages/upload');
}





mongo.MongoClient.connect(url, {
  useUnifiedTopology: true
}, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(process.env.DB_NAME);


})


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));