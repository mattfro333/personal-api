var user = require('../user.js');
var skillz = require('../skillz.js');

var exports = module.exports = {};
 exports.getName = function(req, res){

res.status(200).json(user.name)
}
// console.log(user);
 exports.getLocation = function(req, res){
  res.status(200).json(user.location)
}

exports.getOccupations = function(req, res){
if(req.query.order){
  if(req.query.order == "desc"){
  var sor =  user.occupations.sort()
    res.status(200).json(sor);
  }else if(req.query.order == "asc"){
    var rev= user.occupations.reverse()
    res.status(200).json(rev);
  }
}else {
    res.status(200).json(user.occupations)
  }
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
  exports.getRestaurant = function(req, res){
    var arr = user.restaurants.filter(function(rating){
      return rating.rating <= req.query.rating
    })
  res.status(200).json(arr)
  }

  exports.getRestaurantName = function(req, res){
    var arr = user.restaurants.filter(function(name){
      return name.name == req.params.name
    })
  res.status(200).json(arr)
  }

  exports.changeName = function(req, res){
    console.log(req.params);
    user.name = req.params.name
    res.status(200).json(user.name)
  }

  exports.changeLocation = function(req, res){
    user.location = req.params.location
    res.status(200).json(user.location)
  }

  exports.postHobbies = function(req,res,next){
    user.hobbies.push({name: req.query.name, type: req.query.type})
    res.status(200).json('working')
  }
  exports.postOccupations = function(req,res,next){
    user.occupations.push(req.query.name)
    res.status(200).json('working')
  }
  exports.postFamily = function(req,res,next){
    user.family.push({name: req.query.name, relation: req.query.relation, gender: req.query.gender})
    res.status(200).json('working')
  }
  exports.postRestaurants = function(req,res,next){
    user.restaurants.push({name: req.query.name, type: req.query.type, rating: req.query.rating})
    res.status(200).json(user.restaurants)
  }
  exports.getSkillz = function(req,res,next){
    if(req.query.experience){
    var arr = skillz.filter(function(experience){
      return experience.experience == req.query.experience
    });
    res.status(200).json(arr);
  }else{
  res.status(200).json(skillz);
  }
  }
  exports.postSkillz = function(req,res,next){
    skillz.push({id:req.body.id, name:req.body.name, experience:req.body.experience})
    res.status(200).json(skillz)
  }
