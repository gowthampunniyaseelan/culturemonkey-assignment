const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
 await CompanyModel.find().then((result)=>{
  res.status(200).json(result)
 })
}