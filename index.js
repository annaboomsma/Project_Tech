const express = require('express');
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
