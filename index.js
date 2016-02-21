// Setup basic express server
var express = require('express');
var app = express();
var port = 3000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "gameuser",
  password: "password",
  database: "powgamedb"
});

app.use(express.static(__dirname + '/public'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/score', function (req, res) {
    con.query('SELECT * FROM scoreboard',function(err,rows){
        if(err)
        { 
            throw err;
        }else{
            res.send(rows);    
        }
    });
});