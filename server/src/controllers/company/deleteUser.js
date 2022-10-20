const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  console.log(req.params.id);
  await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
    $pull:{
        users:{
          email:req.params.id
        }
      }
    }
  ).then(()=>{
    res.status(202).json({message:"Successfully Deleted"})
  }).catch((err)=>{
    res.status(204).json({message:"No Content"})
  })
}