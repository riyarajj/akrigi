var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.use(bodyParser.json());
//register
router.post("/register", async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});
 
//login
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});

        //retrieve password from db
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        //convert hashed password to original string
        const ori_password = hashedPassword.toString(CryptoJS.enc.Utf8);
        //check if credentials are correct
        ori_password !== req.body.password &&
         res.status(401).json("Wrong Credentials");

        //providing jst token for user verification
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },process.env.JWT_SEC,{
            expiresIn:"3d"
        });

        //hide password from displaying
        const {password, ...others} = user._doc;
        //user matches or user exist
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;