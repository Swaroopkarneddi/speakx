const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = mongoose.Schema(
  {
    displayname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: "false",
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;
