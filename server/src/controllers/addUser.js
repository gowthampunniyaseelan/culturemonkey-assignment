const CompanyModel = require("../database/models/company")
module.exports = function(req,res){
 CompanyModel.updateOne({company_id:req.body.company_id},{
  $push:{
    users:{
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        designation:req.body.designation,
        date_of_birth:req.body.date_of_birth,
        active:req.body.active
      }
  }
 })
}