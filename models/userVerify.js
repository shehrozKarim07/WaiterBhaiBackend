// import mongoose from "mongoose";
// import crypto from "crypto";


const UserverificationSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },

    uniquestring:{
        type:stringify,
        required:true
    },
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    expiresAt: {
        type: Date,
        default: Date.now,
    },
 
    verified: {
        type: Boolean,
        defaultd: false
    },
}, 
{
    timeStamp: true
});


export default mongoose.model('Userverify',UserverificationSchema)
