/* node server */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bddNotes = require('../mocks/notes.json');
var bddUsers = require('../mocks/users.json');
var fs = require('fs');

// Express
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.listen(9000);

// Tell Express to serve static files
app.use(express.static('../public'));

// Home page
app.get('/', function (request, response, next) {
    response.send('index.html');
});

// return users and resp. notes
app.get('/all-users', function(req, res, next) {
    let users = bddUsers.users;
    bddNotes.notes.forEach( function(v) {

        users.forEach( function(u,k) {
            userNotes = bddNotes.notes.filter( function(v,i){
                return v.userId === u._id;
            });
            u.notes = userNotes;
            users[k] = u;
        })
    });
    res.send(JSON.stringify(users));
});