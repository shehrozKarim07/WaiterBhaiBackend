import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    businessId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Recommendation", recommendationSchema);