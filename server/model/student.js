const mongoose = require("mongoose")


module.exports = mongoose.model('students',new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!"],
        minlength:[3,"Name should not be less than 3 charactors!"],
        maxlength:[40,"Name should not be more than 40 charactors!"]
    },
    gender:{
        type:String,
        required:[true,"Gender is Required!"],
        enum:['male','female','other']
    },
    country:{
        type:String,
        required:[true,"Country is Required!"],
    },
    hobbies:{
        type:Array,
        required:true,
    }

}))