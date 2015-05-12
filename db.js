var mongoose = require('mongoose')
mongoose.connect('mongodb://manu:pjkmk15@ds031601.mongolab.com:31601/mywork',function(err){
	if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});
module.exports = mongoose.connection;

// var Schema = mongoose.Schema;
// var user = new Schema({
// 	username:String,
// 	password:String
// });
// var data = mongoose.model('Data',user);