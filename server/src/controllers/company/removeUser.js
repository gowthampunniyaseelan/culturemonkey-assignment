const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
    $pull:{
        users:{
          email:req.params.id
        }
      }
    }
  ).then(()=>{
    res.status(202).json({message:"Successfully Deleted"})
  })
}