var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { root: 'public' });
});

router.get('/getPlace', function(req, res, next) {
  var word = req.query.q.toLowerCase();
  console.log('word', word);
  request('https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCQeWcc9-LdzhLaZk6zDI_t11-_VX63AKQ&input=' + word).pipe(res);
});

router.get('/getDetails', function(req, res, next) {
  var id = req.query.id;
  console.log('id', id);
  request('https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCQeWcc9-LdzhLaZk6zDI_t11-_VX63AKQ&placeid=' + id).pipe(res);
});


module.exports = router;                      
