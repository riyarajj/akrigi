const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
});

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);
