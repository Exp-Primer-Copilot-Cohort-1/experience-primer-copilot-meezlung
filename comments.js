// Create a web server
// 1. Create a web server
// 2. Create a route for '/'
// 3. Create a route for '/comments'
// 4. Create a route for '/comments/new'
// 5. Create a route for '/comments/:id'
// 6. Create a route for '/comments/:id/edit'
// 7. Create a route for '/comments/:id/delete'
// 8. Create a route for '/comments/:id/flag'

// 1. Create a web server
const express = require('express'); 
const app = express();
const port = 3000;

// 2. Create a route for '/'
app.get('/', (req, res) => {
    res.send('Welcome to the comments app!');
});

// 3. Create a route for '/comments'
app.get('/comments', (req, res) => {
    res.send('This is the comments page!');
});

// 4. Create a route for '/comments/new'
app.get('/comments/new', (req, res) => {
    res.send('This is the new comments page!');
});

// 5. Create a route for '/comments/:id'
app.get('/comments/:id', (req, res) => {
    res.send(`This is the comments page for comment id: ${req.params.id}`);
});

// 6. Create a route for '/comments/:id/edit'
app.get('/comments/:id/edit', (req, res) => {
    res.send(`This is the comments edit page for comment id: ${req.params.id}`);
});

// 7. Create a route for '/comments/:id/delete'
app.get('/comments/:id/delete', (req, res) => {
    res.send(`This is the comments delete page for comment id: ${req.params.id}`);
});

// 8. Create a route for '/comments/:id/flag'
app.get('/comments/:id/flag', (req, res) => {
    res.send(`This is the comments flag page for comment id: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Run the server and test the routes in the browser

// Start the server with the following command:
// node comments.js

// Open a browser and test the routes:
// http://localhost:3000/
// http://localhost:3000/comments
// http://localhost:300