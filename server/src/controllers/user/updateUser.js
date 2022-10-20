const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){

  let check;
  if(req.body.active === "true"){
    check = true
  }else if(req.body.active === "false"){
    check = false
  }
  
  if(req.body.first_name){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.first_name":req.body.first_name
      }
    })
  }
   if(req.body.last_name){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.last_name":req.body.last_name
      }
    })
   }
   if(req.body.designation){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.designation":req.body.designation
      }
    })
   }
   if(req.body.date_of_birth){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.date_of_birth":req.body.date_of_birth
      }
    })
   }
   if(check === true){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.active":true
      }
    })
   }
   if(check === false){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.active":false
      }
    })
   }
   if(req.body.email){
    await CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
      $set:{
        "users.$.email":req.body.email
      }
    })
   }
    
}