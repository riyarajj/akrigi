const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DonateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    images:{
        type: [],
        required:true
    },
    ngo:{
        type:String,
        required:true
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps: true
});


module.exports = mongoose.model("Donate",DonateSchema);