var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var user = require('./user.js');
var index = require('./index.js');

var jsonParser = bodyParser.json;
var urlencodedParser = bodyParser.urlencoded;

//get method
router.get('/', index.indexPage);
router.get('/index', index.indexPage);
router.get('/login', user.loginPage);

//post method
router.post('/user/signin', urlencodedParser, user.signinAction);
router.post('/user/signout', user.signoutAction);

module.exports = router;