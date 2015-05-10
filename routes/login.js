// Get user request

exports.user = function(req,res){
	res.render('login', {title: 'Login'});
};

