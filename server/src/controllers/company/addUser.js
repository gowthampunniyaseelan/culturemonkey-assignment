const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
  await CompanyModel.updateOne({company_id:req.params.id},{
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
  ).then(()=>{
    res.status(200).json({message:"Successfully Updated"})
  })
}