const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Static prototype listening on port ${port}!`));

// Serve static files from the folder  public
// Load the files that are in the public directory from the /static path
app.use('/', express.static('public'));
app.use('/edit', express.static('public'));

// load index.html when user requests /route
app.get('/', function(req, res) {
    res.sendFile(path.join('/public/index.html'));
});

app.get('/edit', function(req, res) {
    res.sendFile(path.join('/public/edit.html'));
});
