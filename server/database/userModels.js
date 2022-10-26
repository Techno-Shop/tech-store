const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const UserModel = new Schema({
    username: String,
   
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },


    imageUrl: String,
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("users", UserModel);