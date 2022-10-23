const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
 CompanyModel.findOne({
  company_id:req.params.id
 }).then(result=>{
  if(result){
    res.status(200).json(result)
  }else{
    res.status(404).json({message:"Company not available"})
  }
 })
}