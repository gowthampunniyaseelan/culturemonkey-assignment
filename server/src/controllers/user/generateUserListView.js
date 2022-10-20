const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
 await CompanyModel.find({},{_id:0,users:1}).then((result)=>{
  res.status(200).json(result)
 })
}