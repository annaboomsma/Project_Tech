const express = require('express');
const camelcaseKeys = require('camelcase-keys');
const app = express();
const port = 3000;


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Serve static files from the folder  public
// Load the files that are in the public directory from the /static path
app.use('/static', express.static('public'));

// load index.html when user requests /route
app.get('/', function(req, res) {
    res.sendFile(path.join('/index.html'));
});

app.get('/contact', (req, res) => {
    res.send('Contact us!')
})

app.get('/about', (req, res) => {
    res.send('About me')
})


// Return text to camelcase and console.log it.
var camelCase = camelcaseKeys({'foo-bar': true});
console.log(camelCase);
console.log(camelcaseKeys('Project-Tech'));