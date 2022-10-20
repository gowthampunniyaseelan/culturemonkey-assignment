const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
 CompanyModel.findOne({
  company_id:req.params.id
 }).then(result=>{
  res.status(200).json(result)
 })
}