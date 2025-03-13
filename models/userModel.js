const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : [true, "A person must add his username"],
  },
  email : {
    type : String,
    required : [true, "Email already registered : try using another email"],
    unique : [true,"Email Address already taken"],
  },
  password : {
    type : String,
    required : [true, "Please add the user Password"],
  },
},
  {
    timestamps : true,
  }
);

module.exports = mongoose.model("User",userSchema);