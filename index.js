// Setup basic express server
var express = require('express');
var app = express();
var port = 3000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require("body-parser");
var mysql = require("mysql");
var secret = "sad;lkfja;klj;laskdjf;ljlaskdjf;laksjdf;lasdjf;lasdkjf;laskjfd";

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


//handles getting the scoreing
app.get('/score', function (req, res) {
    con.query('select * from scoreboard Order by Score DESC LIMIT 10;',function(err,rows){
        if(err)
        { 
            throw err;
        }else{
            res.send(rows);    
        }
    });
});

//handles the insertion of the scoreboard
app.post('/newRecord', function(req, res) {
    console.log(req.body);
    var newscore = req.body;
    
    record = { Name: newscore.Name, Score: newscore.Score};
    if (newscore.Token === secret){
        con.query('INSERT INTO scoreboard SET ?', record, function(err,res){
            if(err) throw err;

            console.log('Last insert ID:', res.insertId);
        });
    }
});