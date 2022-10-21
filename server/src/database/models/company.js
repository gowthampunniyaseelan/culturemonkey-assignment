const mongoose = require("mongoose");
const companiesSchema = new mongoose.Schema({
  company_id: Number,
  company_name:String,
  company_address:String,
  coordinates:[],
  users:[{
    first_name:String,
    last_name:String,
    email:String,
    designation:String,
    date_of_birth:Date,
    active:Boolean
  }]
})

const CompanyModel = mongoose.model("companydetails",companiesSchema);
module.exports = CompanyModel