const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    desc: {
        type: String,
        required:true
    },
    category:{
        type:Array,
    },
    image:{
        type: Boolean,
        default: false,
    },
    price:{
        type: Number,
        required:true
    },
},{
    timestamps: true
});


module.exports = mongoose.model("Product",ProductSchema);