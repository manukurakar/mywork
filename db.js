var mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://manu:pjkmk15@ds031601.mongolab.com:31601/mywork')
var user = new Schema({
	username:String,
	password:String
});

var data = mongoose.model('Data',user);


