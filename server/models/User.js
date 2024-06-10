const mongoose = require("mongoose");
const { schema } = mongoose;

const userschema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", userschema);
module.exports = userModel;
