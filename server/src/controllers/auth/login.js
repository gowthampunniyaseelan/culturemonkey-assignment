const UserModel = require("../../database/models/user")
module.exports = function(req,res){
 UserModel.findOne({email:req.params.id}).then((result)=>{
  if(result.email){
    res.status(200).json(result)
  }
 }).catch(()=>{
  res.status(404).json({message:"Kindly New User Sign Up First"})
 })
}