const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
  CompanyModel.findOne({company_id:req.body.company_id},(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      if(!result){
        CompanyModel.create(req.body).then(()=>{
          res.status(201).json({message:"Successfully Created"})
        })
      }else{
        res.status(403).json({message:"Company already exists"})
      }
      } 
  })
 
}