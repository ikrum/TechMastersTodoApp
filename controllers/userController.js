const User = require('../models/userModel');

exports.addUser = function(req,res){
  const userData = {
    fname   : req.body.fname,
    lname   : req.body.lname,
    password: req.body.password,
    email   : req.body.email
  }

  new User(userData).save()
    .then(function(result){
      res.json({error: false, message: "User added", data: result});
    })
    .catch(function(err){
      res.json({error: true, message: "Error occured", debug: err});
    });
}



exports.getSingleUser = function(req,res){
  User.findOne({fname: req.params.firstName}).then(result => {
    if(!result){
      res.json({error: false, message: "User not found with firstName:"+req.params.firstName});
    }else{
      res.json({error: false, message: "Single user information", data: result});
    }
  }).catch(err => {
    res.json({error: true, message: "Error occured", debug: err});
  });
}


exports.getUsers = function(req,res){

  User.find().then(result => {
    res.json({error: false, message: "List of users", data: result});
  }).catch(err => {
    res.json({error: true, message: "Error occured", debug: err});
  });

}
