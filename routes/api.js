var express = require('express');
var router = express.Router();
cloudantService = require('../service/cloudantService');

/* GET users listing. */
router.get('/', function(req, res, next) {
   console.log('api...');
   res.json({'key':'value'});
});


router.get('/test', function(req, res, next) {
    console.log('api test...');
    cloudantService.listDocument('crud');
    cloudantService.findDocument();
    res.json({'key':'value'});

});

module.exports = router;
