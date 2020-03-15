const express   = require('express')
const router    = new express.Router()
const slug = require('slug');

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
  
router  
    .get('/', (req,res)=>{
        res.render()
    })

    .get('/users', (req,res)=>{
        res.render('pages/users', {data: profiles})
        //res.send(profiles)
        
    })

    .get('/user/:id', (req,res)=>{
        const id =  req.params.id;
        const profile = profiles.find(user=>user.id===id)
    
         res.render('pages/profile', {info : profile});
        //res.send(profile)
    })

    .get('/signup', (req,res)=>{
        res.render('pages/upload');
    })

    .post('/signup', (req,res)=>{
        var id = slug(req.body.name).toLowerCase()

        profiles.push({
            id: id,
            name: req.body.name,
            residence: req.body.residence,
            description: req.body.description
        })
      
        res.redirect('/user/' + id)
    })



module.exports = router