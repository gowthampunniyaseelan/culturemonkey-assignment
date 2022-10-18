require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080

// DB
const CompanyModel = require("../database/models/company")
const UserModel = require("../database/models/user")
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("DB CONNECTED");
}).catch((err)=>{
  console.log("DB CONNECTION ERROR",err);
})

// app
app.listen(port,()=>{
  console.log(`Port listening on ${port}`);
})

app.post("/company-management",(req,res)=>{
  const companyModels = new CompanyModel(req.body)
  companyModels.save()

})

app.post("/user-management",(req,res)=>{

})
