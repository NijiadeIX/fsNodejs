var express = require('express');
var router = express.Router();

var user = require('user.js');

router.post('/user/signin', user.signin);
router.post('/user/signout', user.signout);

module.exports = router;