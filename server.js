var express = require('express');
var path = require('path');
var port = 3000;
var app = express();
app.use(express.json());

app.use('/node_modules', express.static('node_modules'));
app.use('/dist', express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist',  'index.html'));
});

console.log('Listing on port: ', port);
app.listen(port);
