const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
const nodePath = path.resolve('node_modules');
app.use(express.json());
app.use('/angular', express.static(nodePath + '/angular'));
app.use('/angular-route', express.static(nodePath +  '/angular-route'));
app.use('/css', express.static(nodePath + '/bootstrap/dist/css'));
app.use('/bootstrap-js', express.static(nodePath + '/bootstrap/dist/js'));
app.use('/jquery', express.static(nodePath + '/jquery/dist'));
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port);