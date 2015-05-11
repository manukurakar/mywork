
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
 var manu = require('./routes/manu');
 var login = require('./routes/login')
 var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://manu:pjkmk15@ds031601.mongolab.com:31601/mywork',function(err){
	if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/manu',manu.message);
app.get('/login',login.user);
app.post('/auth', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  	console.log('welcome, ' + req.body.username + 'Your password is'+req.body.password)
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});