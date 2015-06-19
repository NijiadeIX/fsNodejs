

function signinAction(req, res) {
	if (!req.body) {
		res.status(400).send('no username or password');
		return;
	}

	console.log(req.body);
	res.render('home');
}

function loginPage(req, res) {
	res.render('login');
}

function signoutAction(req, res) {
	res.render('login');
}

module.exports.loginPage = loginPage;
module.exports.signinAction = signinAction;
module.exports.signoutAction = signoutAction;