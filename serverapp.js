var express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app); 
const bodyParser = require('body-parser');


  var videos = require('./routes/videos')();

  app.use(bodyParser.json({limit: '500000mb'}));
  app.use(bodyParser.urlencoded({limit: '500000mb', extended: true, parameterLimit: 10000000000}));
  
  app.use(express.static(path.join(__dirname, 'public')));

  app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-with, Accept, Authorization, authorization');
    res.header('Access-Control-Allow-Methods','OPTIONS,GET, POST, PUT, DELETE');
    next();
  });
/**
 * create server
 */

app.get('/', function(req, res) {
  res.sendFile('index.html');
});


app.use('/api', videos);


http.listen(5002,(err)=>{
  if(err) throw err;
    console.log('Listing To port http://localhost:5002');
})



