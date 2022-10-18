const mongoose = require("mongoose");
const companiesSchema = new mongoose.Schema({
  company_name:String,
  company_address:String,
  coordinates:String
})

const CompanyModel = mongoose.model("companydetails",companiesSchema);
module.exports = CompanyModel