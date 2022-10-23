const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  CompanyModel.findOne({company_id:req.params.id},(err,result)=>{
      if(err){
        console.log(err);
    }
    if(!result){
      res.status(404).json({message:"Company ID Not  Available"})
    }else{
      if(req.body.company_name){
      CompanyModel.updateOne({company_id:req.params.id},{
          $set:{
            company_name:req.body.company_name
          }
        }).then(()=>{
          res.status(201).json({message:"Updated Successfully"})
        }).catch(()=>{
          res.status(404).json({message:"No Content"})
        })
      }
       if(req.body.company_address){
        CompanyModel.updateOne({company_id:req.params.id},{
          $set:{
            company_address:req.body.company_address
          }
        }).then(()=>{
          res.status(201).json({message:"Updated Successfully"})
        }).catch(()=>{
          res.status(404).json({message:"No Content"})
        })
       }
       if(req.body.coordinates){
       CompanyModel.updateOne({company_id:req.params.id},{
          $set:{
            coordinates:[req.body.coordinates[0],req.body.coordinates[1]]
          }
        }).then(()=>{
          res.status(201).json({message:"Updated Successfully"})
        }).catch(()=>{
          res.status(404).json({message:"No Content"})
        })
       }
    }
  })
}