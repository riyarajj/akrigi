const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
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
    price:{
        type: Number,
        required:true
    },
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps: true
});


module.exports = mongoose.model("Product",ProductSchema);