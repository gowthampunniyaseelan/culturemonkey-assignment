const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  await CompanyModel.deleteOne({company_id:req.params.id}).then((result)=>{
    console.log(result);
    if(result.deletedCount>=1){
      res.status(202).json({message:"Successfully Deleted"})
    }else{
      res.status(404).json({message:"Company Not Available"})
    }   
  })
}