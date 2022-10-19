const CompanyModel = require("../database/models/company")
const UserModel = require("../database/models/user")
module.exports = function(req,res){
  CompanyModel.findOne({company_id:req.body.company_id},(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      if(!result){
        CompanyModel.create(req.body).then(()=>{
          return res.status(201).json({message:"Successfully Created"})
        }).catch(err=>{
         return res.status(400).json({message:"You have to fill all the field"})
        })
      }else{
        return res.status(403).json({message:"Field is already exists"})
      }
      } 
  })
 
}