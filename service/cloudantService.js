'use strict';

var cldtConfig = require('./cloudantConfig.json');
cldtConfig = cldtConfig||process.env.CLOUNDANT_URL;

var Cloudant = require('cloudant');
var cloudant = Cloudant(cldtConfig.url);

var cloudantService = function () {

    var doc = null;

// read a document
    this.listDocument = function(dbname, docname, callback) {

        this.dbname = dbname || cldtConfig.default_dbname;
        var db = cloudant.db.use(this.dbname);

        console.log("Reading document:" + docname);
        db.list(function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            // keep a copy of the doc so we know its revision token
            doc = data;
            // callback(err, data);
        });
    };

    // query using the index
    this.createIndex = function() {

        this.dbname = dbname || cldtConfig.default_dbname;
        var db = cloudant.db.use(this.dbname);


        var indexJson = {
            "index": {
                "fields": [
                     "numberField"
                ]
            },
            "name":"number-index",
            "type":"json"
        };
        db.index(indexJson,function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            // keep a copy of the doc so we know its revision token
            doc = data;
            // callback(err, data);
        });
    };

    // query using the index
    // this.findDocument = function(dbname, queryJson, callback) {
    this.findDocument = function(dbname, queryJson, callback) {

        this.dbname = dbname || cldtConfig.default_dbname;
        var db = cloudant.db.use(this.dbname);



        db.find(queryJson,function(err, data) {
            console.log('Error:', err);
            console.log('Data:', data);
            // keep a copy of the doc so we know its revision token
            doc = data;
            callback(err, data);
        });

    };
}

module.exports = new cloudantService();