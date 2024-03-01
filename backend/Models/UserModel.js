const  mongoose  = require('mongoose');

const UserSchema = mongoose.Schema({

    name : {type : String},
    email : {type : String},
    password :{type : String},
    email_verify_at : {
        type: Date,
        default: new Date()
    },
    otp: {
        type: Number,
        default: null
    },
    status :{type: Number,
    default:1
    }
},
{
    timestamps : true
});

const UserModel = mongoose.model('users',UserSchema)
module.exports = UserModel;