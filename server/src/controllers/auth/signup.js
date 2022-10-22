const UserModel = require("../../database/models/user")
module.exports = function(req,res){
    UserModel.findOne({email:req.body.email},(err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        if(!result){
          UserModel.create(req.body).then(()=>{
            res.status(201).json({message:"Successfully Created"})
          })
        }else{
          res.status(403).json({message:"User already exists"})
        }
        } 
    })
}