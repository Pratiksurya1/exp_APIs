const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    uId:String,  
    emailId:{ type: String,  unique: true,  requied: true, match: [/\S+@\S+\.\S+/, 'is invalid'],index: true},
    name:{type: String, requied: true},
    age:{ type: Number, min: 18, index: true },
    gender:{type: String, required: true},
});

const User = mongoose.model('User', userSchema);
module.exports= User;
