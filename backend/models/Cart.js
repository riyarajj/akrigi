const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products:[
        {
            productId:{
                type: String
            }
        }
    ]
},{
    timestamps: true
});


module.exports = mongoose.model("Cart",CartSchema);