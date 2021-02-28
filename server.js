const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap-js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static(__dirname + 'node_modules/jquery/dist'));
app.use(express.static(path.join(__dirname, 'public')));


let questions = [
    {id: 1, Description: 'Where were the Quaid e Azam born?',options:[
        {id:1,Description:'Karachi',Type:'radio' },
        {id:2,Description:'Lahore',Type:'radio' },
        {id:3,Description:'Sailkote',Type:'radio' }    
        ]},
    { id: 2, Description: 'Where were the Allama Iqbal born?',options:[
        {id:1,Description:'Lahore',Type:'radio' },
        {id:2,Description:'Karachi',Type:'radio' },
        {id:2,Description:'Multan',Type:'radio' },
        {id:3,Description:'Sailkote',Type:'radio'}
        ]},
    { id: 3, Description: 'Capital of Pakistan', options:[
        {id:1,Description:'Multan',Type:'radio' },
        {id:2,Description:'Sakhar',Type:'radio' },
        {id:3,Description:'Islamabad',Type:'radio' }    
        ]},
    { id: 4, Description: 'WFF top fighter 2020', options:[
            {id:1,Description:'Khabib',Type:'radio' },
            {id:2,Description:'John Watson',Type:'radio' },
            {id:3,Description:'Mike Pejeot',Type:'radio' }    
        ]},

    { id: 5, Description: 'Who win the boxing world championship in 2020',options:[
        {id:1,Description:'Joshawa',Type:'radio' },
        {id:2,Description:'Anthonoy',Type:'radio' },
        {id:3,Description:'Mohammad Ali',Type:'radio' }    
    ]}
];
app.get('/', (req,res) => {
    res.sendFile('index.html');
});


app.get('/questions',(req,res) => {
    res.status(200).send(questions);
});


app.listen(port);
