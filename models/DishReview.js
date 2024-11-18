import mongoose from "mongoose"; 


const dishReveiwSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    review: {
        type: String,
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
});


export default mongoose.model("DishReview", dishReveiwSchema);