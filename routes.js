const express   = require('express')
const router    = new express.Router()
const slug = require('slug');

// dummy data 
let profiles = [
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

  // routes with arrow functions. 
router  
    .get('/', (req,res)=>{
        res.render('pages/upload');
    })

    .get('/users', (req,res)=>{
        res.render('pages/users', {data: profiles})
        //res.send(profiles)
        
    })

    .get('/user/:id', (req,res)=>{
        const id =  req.params.id;
        const profile = profiles.find(user=>user.id===id)
    
        // render profile with the matching data.
         res.render('pages/profile', {info : profile});
        //res.send(profile)
    })

    .get('/signup', (req,res)=>{
        res.render('pages/upload');
    })

    .post('/signup', (req,res)=>{
        // convert to lowercase
        var id = slug(req.body.name).toLowerCase()
        
        //push the body data into the profiles array
        profiles.push({
            id: id,
            name: req.body.name,
            residence: req.body.residence,
            description: req.body.description
        })
      
        // redirect to the corresponding user id page
        res.redirect('/user/' + id)
    })

    
    .post('/user/:id', (req,res)=>{
        // post the updated profile info to the profile
        var id = slug(req.body.name).toLowerCase()

        profiles.push({
            id: id,
            name: req.body.name,
            residence: req.body.residence,
            description: req.body.description
        })

       // redirect to the corresponding user id page
        res.redirect('/user/' + id)
    })

    

// export routes, so I cans use it in my index.js
module.exports = router