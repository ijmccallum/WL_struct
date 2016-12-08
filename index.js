var express    = require('express');        // call express
var app        = express();                 // define our app using express
var path       = require('path');

var port = process.env.PORT || 8081;

app.use(express.static('front-end'))

//================================= Routes
var indexRouter = express.Router();

indexRouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/front-end/index.html'));
});

indexRouter.get('/api', function(req, res){
    //pass this onto the API service
})

app.use('/', indexRouter);

//================================= Begin
app.listen(port);

console.log('http://localhost:' + port);