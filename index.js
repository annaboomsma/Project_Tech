const express = require('express');
const camelCase = require('camelcase');
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.use(express.static(__dirname + '/public'));


// WEEK 2

// Stuur verschillende soorten files mee, bij verschillende sorten routes.
// Send mp3 file instead of html file
app.get('/mp3', (req, res) => {
    const file = __dirname + '/Public/mp3/audio.mp3';
    res.download(file);
   
})


// Wanneer /about wordt gerequest, log dan de query informatie die is meegestuurd.
// Log the query data.
app.get('/about', (req, res) => {
    res.send('About me')
    console.log(req.query);
})


app.get('/', function(req, res) {
    // Data to be displayed in ejs template.
    var matches = [
        { name: 'Jason', festival: 'Amsterdam open Air' },
        { name: 'Justin', festival: 'Mystic garden' },
        { name: 'David', festival: 'Verknipt' }
    ];
    
    res.render('pages/index', {
        matches: matches
    });
});






// WEEK 1, old homework

// Serve static files from the folder  public
// Load the files that are in the public directory from the /static path
// app.use('/static', express.static('public'));
// app.use('/', express.static('public'));

// load index.html when user requests /route
// app.get('/', function(req, res) {
//     res.sendFile(path.join('/Public/index.html'));
// });

// app.get('/contact', (req, res) => {
//     res.send('Contact us!')
// })

// app.get('/about', (req, res) => {
//     res.send('About me')    
// })
// Return text to camelcase and console.log it.
//console.log(camelCase('Hey-Isabel'));