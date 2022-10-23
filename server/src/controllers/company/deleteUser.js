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
  ).then((result)=>{
    if(result.modifiedCount>=1){
      res.status(202).json({message:"Successfully Deleted"})
    }else{
      res.status(404).json({message:"User Not Available"})
    } 
  })
}