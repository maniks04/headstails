var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var poop = require('./db/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/', function(req, res) {
  
})



app.post('/heads/tails', function(req, res) {
  console.log(req.body)
  }
)



function headsOrTails() {
  var index = Math.floor(Math.random() * 2);
  var arr = ['heads', 'tails'];
  return arr[index];
  
}



app.get('/list', function(req, res) {
  poop.dbConnection.query('select * from headtailresults', function(err, results) {
    if (err) {
      console.log('errrrorrrr', err)
    } else {
      res.send(results)
    }
  })
})


app.get('/heads/tails', function(req, res) {
  console.log('request from client has been received')
 var headtail = headsOrTails()
 var string = 'insert into headtailresults (result) values ("' + headtail + '")'
 poop.dbConnection.query(string, function(err, rows) {
   if (err) {
     console.log('erroorrr querying databse', err)
   }
   else {
     res.send('successfully added to database')
   }
 }
)

 
  
})

app.listen(8080, function() {
  console.log('listening on port 3000!');
});