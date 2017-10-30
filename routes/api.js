var express = require('express');
var router = express.Router();
cloudantService = require('../service/cloudantService');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//    console.log('api...');
//    // res.json({'key':'value'});
// });


router.post('/test', function(req, res, next) {
    console.log('api test...');
    // cloudantService.listDocument('crud');
    cloudantService.findDocument(null, req.body, function(err, data) {
        res.setHeader("Content-Type", "application/json");
        res.json(data);
    });
});

module.exports = router;
