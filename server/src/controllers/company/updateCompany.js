const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  if(req.body.company_name){
    await CompanyModel.updateOne({company_id:req.params.id},{
      $set:{
        company_name:req.body.company_name
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
  }
   if(req.body.company_address){
    await CompanyModel.updateOne({company_id:req.params.id},{
      $set:{
        company_address:req.body.company_address
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }
   if(req.body.coordinates){
    await CompanyModel.updateOne({company_id:req.params.id},{
      $set:{
        coordinates:req.body.coordinates
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }
    
}