const express = require('express');
const app = express();
const port = 3000;

// GET method route
// When user route is http://localhost:300 -> respond with text.
app.get('/', (req, res) => res.send('Week 1 exercise: serve'));
app.get('/about', (req,res) => res.send('About my company'));
app.get('/contact', (req,res) => res.send('Contact us!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//Route paths

// When http://localhost:3000/static we can serve every file from the public directory
app.use('/static', express.static('public'));
