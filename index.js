const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const slug = require('slug');
const multer = require('multer');
const app = express();




const port = 3000;
// const upload = multer({dest: '/uploads'})


// set the view engine to ejs
app
    .use(express.static(__dirname + '/public'))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')
    .get('/', users)
    .get('/:id',user);

    


// //  WEEK 3


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

  function users(req, res) {
    res.render('pages/users', {data: profiles})

  }

function user(req,res ,next){
//console.log(req.params.id)
//const profile =  req.params.id;
const profile = profiles.find(user=>user.id===req.params.id)
res.render('pages/profile', {info : profile});

}
  
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));


