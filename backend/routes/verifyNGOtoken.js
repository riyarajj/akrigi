const passport = require('passport');
const LocalStatergy = require("passport-local").Strategy;
const NGO = require('../models/NGO');
const JwtStatergy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const jwt = require('jsonwebtoken');

exports.ngolocal = passport.use("ngolocal",new LocalStatergy(NGO.authenticate()));
passport.serializeUser(NGO.serializeUser());
passport.deserializeUser(NGO.deserializeUser());


exports.getToken = (user)=>{
    return jwt.sign(user,process.env.JWT_SEC,{
        expiresIn: 36000
    });
};

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SEC;

exports.jwtPassport = passport.use(new JwtStatergy(opts,
    (jwtPayload, done)=>{
        console.log(jwtPayload);
        NGO.findOne({_id:jwtPayload._id},(err,user)=>{
            if(err){
                return done(err,false);
            }else if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));

exports.verifyUser = passport.authenticate("jwt",{session: false});

exports.verifyOrdinaryUser = function(req,res,next){
    var authHeaders = req.headers["authorization"];
    if(authHeaders.split("")[0]==="Bearer")
        var token = authHeaders.split("")[1];

    if(token){
        jwt.verify(token,process.env.JWT_SEC, (err,decoded)=>{
            if(err){
                var err = new Error("You are not authorized");
                err.status = 401;
                return next(err);
            }else {
                NGO.findOne({_id:decoded._id},(err,user)=>{
                    if(err) next(err);
                    else{
                        req.user = user;
                        next();
                    }
                });
            }
        })
    }else{
        var err = new Error("No token available!");
        err.status = 403;
        return next(err);
    }
};

exports.verifyAdmin = function(req,res,next){
    if(req.user.admin){
        next();
    }else{
        var err = new Error("You are not authorized to perform this operation");
        err.status = 403;
        return next(err);
    }
}