const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
  CompanyModel.find().then((result)=>{
    res.status(200).json(result)
  })
}