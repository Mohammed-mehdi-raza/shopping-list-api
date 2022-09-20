import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const users = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    }
});

const user = mongoose.model("user",users);

export default user;