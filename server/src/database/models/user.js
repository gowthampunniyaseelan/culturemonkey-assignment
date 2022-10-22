const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  username:String,
  email:String
})
const UserModel= mongoose.model("userdetails",usersSchema);
module.exports = UserModel