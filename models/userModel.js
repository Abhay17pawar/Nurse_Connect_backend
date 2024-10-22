const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    nurseId : {
        type : String,
        required : true
    },
    uploadId : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const User = mongoose.model("User",userModel);
module.exports = User;