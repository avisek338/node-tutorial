const mongoose  = require("mongoose")
const menuSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:'false', 
        required:true
    },
    ingridients:{
        type:[String],
        default:'false', 
        required:true
    },
    num_sales:{
        type:Number,
        default:0, 
        required:true
    }
    
})
const menu = mongoose.model("menu",menuSchema)
module.exports = menu