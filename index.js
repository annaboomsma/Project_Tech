const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const slug = require('slug');
const multer = require('multer');
const app = express();
const port = 3001;


const profiles = [
    {
      id: 'isabel-admiraal',
      name: 'Isabel Admiraal',
      residence: 'Alkmaar',
      description: 'Love for hip-hop and r&b'
    },
    {
      id: 'esmay-baay',
      name: 'Esmay Baay',
      residence: 'Alkmaar',
      description: 'Scorpio who is enjoying life'
    }
  ]


// const upload = multer({dest: '/uploads'})


// set the view engine to ejs
app
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')
    .get('/users', users)
    .get('/user/:id',user)
    .get('/signup', form)
    .post('/signup', create);




// //  WEEK 3

function form(req, res) {
    res.render('pages/upload');
}


function users(req, res) {
    res.render('pages/users', {data: profiles})
    //res.send(profiles)
}

function create(req, res) {
  var id = slug(req.body.name).toLowerCase()

  profiles.push({
      id: id,
      name: req.body.name,
      residence: req.body.residence,
      description: req.body.description
  })

  res.redirect('/user/' + id)
}

function user(req,res){
    const id =  req.params.id;
    const profile = profiles.find(user=>user.id===id)

     res.render('pages/profile', {info : profile});
    //res.send(profile)
}


// function edit(req,res){
//   const id =  req.params.id;
//   const profile = profiles.find(user=>user.id===id)

//    res.render('pages/edit_profile', {title: 'Edit profile' ,info : profile});
//   //res.send(profile)
//   res.redirect('/user/edit' + id)
// }

  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));