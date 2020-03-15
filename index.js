const express = require('express');
const camelCase = require('camelcase');
const bodyParser = require('body-parser');
const routes = require('./routes.js')
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
    // .get('/users', users)
    // .get('/user/:id',user)
    // .get('/signup', form)
    // .post('/signup', create);z
    .use(routes)



// //  WEEK 4


  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));