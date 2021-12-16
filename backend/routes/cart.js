var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
const Cart = require("../models/Cart");
const verify=require('./verifyjsontoken');
 
router.use(bodyParser.json());

// create the cart
router.post("/",verify.verifyUser ,async (req,res)=>{
  const newCart = new Cart(req.body);

  try{
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  }catch(err){
    res.status(500).json(err);
  }
});

//update cart
router.put("/:id",verify.verifyUser, async(req,res)=>{

  try{
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },{
      new:true
    });
    res.status(200).json(updatedCart);
  }catch(err){
    res.status(500).json(err);
  }
});

//delete
router.delete("/:id",verify.verifyUser, async (req,res)=>{
  try{
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been successfully deleted!");
  }catch(err){
    res.status(500).json(err);
  }
});

//get user Cart
router.get("/find/:userId",verify.verifyUser, async (req,res)=>{
  try{
    const cart = await Cart.findOne({userId: req.params.userId});

    res.status(200).json(cart);
  }catch(err){
    res.status(500).json(err);
  }
});

//get all carts 
router.get("/",verify.verifyAdmin, async (req,res)=>{
  try{
      const carts = await Cart.find();
      res.status(200).json(carts);
  }catch(err){
    res.status(500).json(err);
  }
});


module.exports = router;
