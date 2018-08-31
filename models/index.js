var mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect("mongodb://localhost/mkx_api");

mongoose.Promise = Promise;

module.exports.MKX = require("./mkx");