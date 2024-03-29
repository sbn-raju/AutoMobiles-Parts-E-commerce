const mongoose = require("mongoose");


let cartSchema = new mongoose.Schema({
    item_pic:{
        type:String,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    item_company:{
        type:String,
        required:true
    },
    item_category:{
        type:String,
        required:true
    },
    item_price:{
        type:Number,
        required:true
    },
    item_discount:{
        type:Number,
        required:true
    },
    item_rating:{
        type:Number,
    },
    item_des:{
        type:String,
        minLength:10,
        required:true
    }
});

let Cart = new mongoose.model("Cart",cartSchema);

module.exports = Cart;