var user = require('../user.js');

var exports = module.exports = {};
 exports.getName = function(req, res){

res.status(200).json(user.name)
}

 exports.getLocation = function(req, res){
  res.status(200).json(user.location)
}

exports.getOccupations = function(req, res){
  res.status(200).json(user.occupations)
}

exports.getLatest = function(req, res){
  res.status(200).json(user.occupations[user.occupations.length -1])
}

exports.getHobbies = function(req, res){
   res.status(200).json(user.hobbies)
 }

exports.getType = function(req, res){
  var arr = user.hobbies.filter(function(type){
    return type.type == req.params.type
  })
//   var arr = [];
//   for(var i = 0; i < user.hobbies.length; i++){
//   if (user.hobbies[i].type == req.params.type) {
//   arr.push(user.hobbies[i].type)
// }
// }
res.status(200).json(arr);
}
//
exports.getFamily = function(req, res){
  var arr = user.family.filter(function(relation){
    return relation.relation == req.query.relation
  })
res.status(200).json(arr)
}

exports.getGender = function(req, res){
  var arr = user.family.filter(function(gender){
    return gender.gender == req.params.gender
  })
    res.status(200).json(arr);
}
