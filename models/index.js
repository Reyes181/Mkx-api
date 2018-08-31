var mongoose = require('mongoose');

mongoose.set('debug', true);

// mongoose.connect("mongodb://localhost/mkx_api");
mongoose.connect("mongodb://Emilio:bairdfan45@ds239682.mlab.com:39682/er_mkxapi");

mongoose.Promise = Promise;

module.exports.MKX = require("./mkx");