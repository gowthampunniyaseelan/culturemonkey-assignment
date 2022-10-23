const CompanyModel = require("../../database/models/company")
module.exports = function(req,res){
  CompanyModel.findOne({users:{$elemMatch:{email:req.body.email}}},(err,result)=>{
    if(err){
      console.log(err);
    }
    if(!result){
      CompanyModel.updateOne({company_id:req.params.id},{
        $push:{
            users:{
              first_name:req.body.first_name,
              last_name:req.body.last_name,
              email:req.body.email,
              designation:req.body.designation,
              date_of_birth:req.body.date_of_birth,
              active:req.body.active
            }
          }
        }
      ).then((result)=>{
        if(result.modifiedCount >=1){
          res.status(201).json({message:"Successfully Added"})
        }
        else{
          res.status(404).json({message:"Company ID not available"})
        }
      })
    }else{
      res.status(403).json({message:"User Already Exists"})
    }
  })
}