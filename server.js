var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName)

app.get('/location', mainCtrl.getLocation)

app.get('/occupations', mainCtrl.getOccupations)

app.get('/occupations/latest', mainCtrl.getLatest)

app.get('/hobbies', mainCtrl.getHobbies)

app.get('/hobbies/:type', mainCtrl.getType)

app.get('/family', mainCtrl.getFamily)

app.get('/family/:gender', mainCtrl.getGender)
//
// app.get('/restaurants', mainCtrl.getRestaurant)
//
// app.get('/restaurants/:name', mainCtrl.getRestaurantName)
app.listen(3001, function(){
  console.log("Now listening on Port 3001")
});
