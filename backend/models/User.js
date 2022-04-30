const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose,{usernameField:'email'});

module.exports = mongoose.model("User",UserSchema);
