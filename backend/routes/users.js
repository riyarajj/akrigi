var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const User = require("../models/User");
const verify=require('./verifyjsontoken');
 
router.use(bodyParser.json());

//UPDATE user deatils like username,password 
router.put("/:id",verify.verifyUser , async(req,res,next)=>{
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
      ).toString()
  }

  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{
      new:true
    });
    res.status(200).json(updatedUser);
  }catch(err){
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id",verify.verifyAdmin,async (req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been successfully deleted!");

  }catch(err){
    res.status(500).json(err);
  }
});

//get user by id
router.get("/find/:id",verify.verifyUser ,async (req,res)=>{
  try{
    const user = await User.findById(req.params.id);

    //hide password from displaying
    const {password, ...others} = user._doc;
    //user matches or user exist
    res.status(200).json({...others, accessToken});

    res.status(200).json(others);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all users
router.get("/",verify.verifyUser ,async (req,res)=>{
  const query = req.query.new;
  try{
    const users = query 
    ? await User.find().sort({_id: -1}).limit(5) 
    : await User.find();
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err);
  }
});

//get user stats


module.exports = router;
