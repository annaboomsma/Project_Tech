const express   = require('express')
const router    = new express.Router()
const slug = require('slug');
const url  = require('./index.js')


router  
   .get('/', (req, res ,next)=>{
        
             
    })
    
    .get('/profile', (req, res ,next)=>{
        
        
        
    })

    // This route/function purpose is to store the users input data
    // Inserted via the ejs form.
    .post('/insert', (req, res ,next)=>{
    const profile = {
        name: req.body.name,
        age: req.body.age,
        residence: req.body.residence,
        gender: req.body.residence,
        interest: req.body.interest,
        music_genre: req.body.genre
    }; 
    
    res.redirect('/')
    
    })
    .post('/update', (req, res ,next)=>{
        
        
        
    })
    .post('/delete', (req, res ,next)=>{
        
        
        
    })


module.exports = router