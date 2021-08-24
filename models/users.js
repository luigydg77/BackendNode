const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    firstName: { type: String},
    lasName:{ type:String},
    email:{type:String},
    role:{type: String}

})