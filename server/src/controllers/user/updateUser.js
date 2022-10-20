const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){

  let check;
  if(req.body.active === "true"){
    check = true
  }else if(req.body.active === "false"){
    check = false
  }else{
    res.status(400).json({message:"Check the value"})
  }

  if(req.body.first_name){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.first_name":req.body.first_name
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
  }

   if(req.body.last_name){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.last_name":req.body.last_name
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }

   if(req.body.designation){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.designation":req.body.designation
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }

   if(req.body.date_of_birth){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.date_of_birth":req.body.date_of_birth
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }

   if(check === true){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.active":true
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }

   if(check === false){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.active":false
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }

   if(req.body.email){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.email":req.body.email
      }
    }).then(()=>{
      res.status(201).json({message:"Updated Successfully"})
    }).catch(()=>{
      res.status(204).json({message:"No Content"})
    })
   }  
}