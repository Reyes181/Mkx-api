var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
    
var mkxRoutes = require('./routes/mkroutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send("index.html");
})

app.use('/api/character', mkxRoutes);







// Start Server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});