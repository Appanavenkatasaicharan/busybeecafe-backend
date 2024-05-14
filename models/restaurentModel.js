import mongoose from 'mongoose';

const restaurentSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password:{type:String,required:true},
},{minimize:false})

const restaurentModel = mongoose.models.restaurent || mongoose.model('restaurent',restaurentSchema);
export default restaurentModel;
