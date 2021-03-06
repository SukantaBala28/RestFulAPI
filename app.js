var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genres');
//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore',{useMongoClient:true});
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Plese use /api/books or /api/genre');
});

app.get('/app/genres', function(req, res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.listen(3000);
console.log('Running on port 3000..');