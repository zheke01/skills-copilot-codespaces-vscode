// Create web server
// npm install express body-parser
// npm install nodemon -g
// nodemon comments.js
// http://localhost:3000/comments
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json({ status: 'success', message: 'Comment added' });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});