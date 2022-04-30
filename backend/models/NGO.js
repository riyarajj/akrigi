const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

var NgoSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    mob: {
        type: String,
        required:true
    },
    site:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true
});

NgoSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("NGO",NgoSchema);
