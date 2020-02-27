const express = require('express');
const camelCase = require('camelcase');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// Serve static files from the folder  public
// Load the files that are in the public directory from the /static path
app.use('/static', express.static('public'));
app.use('/', express.static('public'));

// load index.html when user requests /route
app.get('/', function(req, res) {
    res.sendFile(path.join('/Public/index.html'));
});

app.get('/contact', (req, res) => {
    res.send('Contact us!')
})

// app.get('/about', (req, res) => {
//     res.send('About me')
    
// })



// WEEK 2

// Wanneer /about wordt gerequest, log dan de query informatie die is meegestuurd
app.get('/about', (req, res) => {
    res.send('About me')
    console.log(req.query);
})



// Return text to camelcase and console.log it.
//console.log(camelCase('Hey-Isabel'));