const express = require('express');
const db = require('./db');
const path = require('path');
const port = 3000;

const app = express();
app.use(express.json());
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap-js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.sendFile('index.html');
});

// all servey apis
app.post('/survey', (req, res) => {
    const survey = req.body;
    var query = "insert into tblSurvey(Name, Description, StartDate, EndDate, IsPublic)";
    query += `values ('${ survey.name }', '${ survey.description }', '${ survey.startDate }', '${ survey.endDate }', '${survey.isPublic ? 1 : 0}')`
    db.ExecuteQuery(query, res);
    // res.status(200).send(query);
})


app.get('/questions',(req,res) => {
    var query = "select * from tblQuestion"
    db.ExecuteQuery(query, res);
});

app.get('/surveylist', (req,res) => {
    var query = "select * from tblSurvey"
    db.ExecuteQuery(query, res);
});


app.listen(port);
