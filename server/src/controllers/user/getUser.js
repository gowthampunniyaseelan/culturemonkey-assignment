const CompanyModel = require("../../database/models/company")
module.exports = async function(req,res){
 await CompanyModel.findOne({users:{$elemMatch:{email:req.params.id}}}).then((result)=>{
    if(result){
        console.log(result)
        result.users.map((value)=>{
            if(value.email ===req.params.id){
                const data = {
                    users:[{
                        first_name:value.first_name,
                        last_name:value.last_name,
                        email:value.email,
                        designation:value.designation,
                        date_of_birth:value.date_of_birth,
                        active:value.active
                    }]
                }
                res.status(200).json(data)
                console.log(value.first_name);
                console.log(value.last_name);
                console.log(value.email);
                console.log(value.designation);
                console.log(value.date_of_birth);
                console.log(value.active);
            }
    })
    }
    else{
        res.status(404).json({message:"User Not Available"})
    }
 })
}