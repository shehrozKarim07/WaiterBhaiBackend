import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    otp: {
        type: String,
        length: 6,
        required: true
    },
    expiryTime: {
        type: Number,
        required: true
    }
});


export default mongoose.model("OTP", otpSchema);