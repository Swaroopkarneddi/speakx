const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", userschema);
module.exports = userModel;
