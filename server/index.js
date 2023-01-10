require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080

// DB
const CompanyModel = require("./src/database/models/company")
const UserModel = require("./src/database/models/user")

mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("DB CONNECTED");
}).catch((err)=>{
  console.log("DB CONNECTION ERROR",err);
})

const companyRoutes = require("./src/routes/company")
const userRoutes = require("./src/routes/user")

app.listen(port,()=>{
  console.log(`Port listening on ${port}`);
})

app.use("/company-management",companyRoutes)

app.use("/user-management",userRoutes)
