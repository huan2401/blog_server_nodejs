const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});

router.get('/search', function(req, res){
	res.render('pages/search/index');
});

module.exports = router;
