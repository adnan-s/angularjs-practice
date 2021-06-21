const express = require('express');
const path = require('path');
const port = 3000;

const DIST_PATH = path.resolve('dist');
const NODE_MODULES = path.resolve('node_modules');

const app = express();
app.use(express.json());

// index.html need this location.
app.use('/dist', express.static(DIST_PATH));

// gulp needs this node module location.
app.use('/node_modules', express.static(NODE_MODULES));

// index.html is at src folder 
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

console.log('Listing on port: ', port);

app.listen(port);
