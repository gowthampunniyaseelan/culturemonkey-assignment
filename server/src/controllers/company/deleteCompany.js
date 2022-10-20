const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  await CompanyModel.deleteOne({company_id:req.params.id}).then(()=>{
    res.status(202).json({message:"Successfully Deleted"})
  })
}