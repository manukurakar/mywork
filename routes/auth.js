// Insert into mongodb database
var user = require('../schemas/user');
exports.authentication = function(req,res){
	if (!req.body) return res.sendStatus(400)
  	// console.log('welcome, ' + req.body.username + 'Your password is'+req.body.password)
  
  var uname = req.param('username');
  var pwd = req.param('password');
  
  var data = user({
  	username:uname,
  	password:pwd
  });

  data.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});


  
  

};