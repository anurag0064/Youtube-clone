const  mongoose  = require('mongoose');

const UserSchema = new mongoose.Schema({

    name : {type : String},
    email : {type : String},
    password :{type: String},
    image :{type: String},
    status :{type: String},
});

const UserModel = mongoose.model('users',UserSchema)
module.exports = UserModel;