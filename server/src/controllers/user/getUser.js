const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
 await CompanyModel.findOne({users:{$elemMatch:{email:req.params.id}}}).then((result)=>{
    if(result){
        res.status(200).json(result)
    }
    else{
        res.status(404).json({message:"No Company Available"})
    }
 })
}