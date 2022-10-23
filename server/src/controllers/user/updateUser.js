const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){

  let check;
  if(req.body.active === "true"){
    check = true
  }else if(req.body.active === "false"){
    check = false
  }
CompanyModel.findOne({users:{$elemMatch:{email:req.params.id}}},(err,result)=>{
  if(err){
    console.log(err);
  }
  if(!result){
    res.status(404).json({message:"User Not available"})
  }else{
    if(req.body.first_name){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.first_name":req.body.first_name
        }
      }).then(()=>{
        res.status(201).json({message:"Updated First Name Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
    }
  
     if(req.body.last_name){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.last_name":req.body.last_name
        }
      }).then(()=>{
        res.status(201).json({message:"Updated Last Name Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
     }
  
     if(req.body.designation){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.designation":req.body.designation
        }
      }).then(()=>{
        res.status(201).json({message:"Updated Designation Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
     }
  
     if(req.body.date_of_birth){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.date_of_birth":req.body.date_of_birth
        }
      }).then(()=>{
        res.status(201).json({message:"Updated Date of Birth Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
     }
  
     if(check === true){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.active":true
        }
      }).then(()=>{
        res.status(201).json({message:"Updated Active Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
     }
  
     if(check === false){
       CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
        $set:{
          "users.$.active":false
        }
      }).then(()=>{
        res.status(201).json({message:"Updated Active Successfully"})
      }).catch(()=>{
        res.status(404).json({message:"No Content"})
      })
     }
  
    //  if(req.body.email){
    //    CompanyModel.updateOne({users:{$elemMatch:{email:req.params.id}}},{
    //     $set:{
    //       "users.$.email":req.body.email
    //     }
    //   }).then(()=>{
    //     res.status(201).json({message:"Updated email Successfully"})
    //   }).catch(()=>{
    //     res.status(404).json({message:"No Content"})
    //   })
    //  }  
  }
})
  
}