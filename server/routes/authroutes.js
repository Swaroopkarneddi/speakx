const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registeruser,
  loginuser,
  getprofile,
  newpost,
  feed,
} = require("../controlers/authcontroler");
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test);
router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/profile", getprofile);
router.post("/newpost", newpost);
router.get("/feed", feed);

module.exports = router;
