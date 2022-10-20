const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
 CompanyModel.findOne({users:{$elemMatch:{email:req.params.id}}},{_id:0,users:1}).then((result)=>{
  res.status(200).json(result)
 })
}