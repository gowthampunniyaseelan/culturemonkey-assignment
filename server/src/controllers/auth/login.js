const UserModel = require("../../database/models/user")
module.exports = function(req,res){
 UserModel.findOne({
  email:req.params.id
 }).then(result=>{
  if(result){
    res.status(200).json(result)
  }else{
    res.status(404).json({message:"Company not available"})
  }
 })
}