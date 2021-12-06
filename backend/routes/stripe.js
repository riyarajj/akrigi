const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.use(bodyParser.json());


router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "INR",
        },
        (stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
    );
});
module.exports = router;
