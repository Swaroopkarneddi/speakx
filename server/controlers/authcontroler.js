const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashpassword, comparepassword } = require("../helpers/auth");
const test = (req, res) => {
  res.json("test is working");
};

const registeruser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "password is required",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "email is taken already",
      });
    }
    const exist2 = await User.findOne({ username });
    if (exist2) {
      return res.json({
        error: "username is taken already",
      });
    }

    const hashedpassword = await hashpassword(password);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedpassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "no user found",
      });
    }

    const match = await comparepassword(password, user.password);
    if (match) {
      // res.json("pasword match");
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res.cookie("token", token).json(user);
        }
      );
    }

    if (!match) {
      res.json({
        error: "password not matched",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registeruser,
  loginuser,
};