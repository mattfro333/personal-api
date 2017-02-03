var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.getName)
app.get('/api/location', mainCtrl.getLocation)
app.get('/api/occupations', mainCtrl.getOccupations)
app.get('/api/occupations/latest', mainCtrl.getLatest)
app.get('/api/hobbies', mainCtrl.getHobbies)
app.get('/api/hobbies/:type', mainCtrl.getType)
app.get('/api/family', mainCtrl.getFamily)
app.get('/api/family/:gender', mainCtrl.getGender)
app.get('/api/restaurants', mainCtrl.getRestaurant)
app.get('/api/restaurants/:name', mainCtrl.getRestaurantName)
app.put('/api/changename/:name', mainCtrl.changeName)
app.put('/api/changelocation/:location', mainCtrl.changeLocation)
app.post('/api/addHobbies', mainCtrl.postHobbies)
app.post('/api/addOccupations', mainCtrl.postOccupations)
app.post('/api/addFam', mainCtrl.postFamily)
app.post('/api/addRestaurants', mainCtrl.postRestaurants)
app.get('/api/skillz', mainCtrl.getSkillz)
app.post('/api/skillz', middleware.generateId, mainCtrl.postSkillz)
app.get('/secrets/:username/:pin', middleware.verify);




app.listen(3001, function(){
  console.log("Now listening on Port 3001")
});
