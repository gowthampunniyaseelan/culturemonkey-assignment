const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  first_name:String,
  last_name:String,
  email:String,
  designation:String,
  date_of_birth:Date,
  active:Boolean
})
const UserModel= mongoose.model("userdetails",usersSchema);
module.exports = UserModel