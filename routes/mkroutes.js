var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    db.MKX.find()
    .then(function(characters){
        var randomItem = characters[Math.floor(Math.random() * characters.length)]
        res.json(randomItem);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.get('/list', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    db.MKX.find()
    .then(function(characters){
        res.json(characters);
    })
    .catch(function(err){
        res.send(err);
    })
});
router.post('/', function(req, res){
    db.MKX.create(req.body)
    .then(function(newCharacters){
        res.status(201).json(newCharacters);
    })
    .catch(function(err){
      res.send(err);  
    });
})
module.exports = router;