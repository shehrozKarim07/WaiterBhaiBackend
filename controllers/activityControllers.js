// import Activity from "../models/Activity.js";
// import express from "express";
// const router = express.Router();



// const createActivity = async (req, res) => {
//     try {
//         let activity = new Activity({
//             ...req.body
//         });
//         await activity.save();
//         return res.status(201).send({ success: true, Message: 'Activity has been created' });
//     } catch (err) {
//         return res.status(500).send({ success: false, Message: 'Internal Server Error' });
//     }
// }

// const getAllActivity = async (req, res) => {
//     try {
//         //TODO: get user profile picture, username,likes,raring,pictures count, timeago
//         //TODO: get activity details, hotel,hotelPicture,hotelName,rating,reviews,address
//         //TODO: the rating given by the user
//         //TODO: the review written by the user
//         //TODO: get impression counts for the review,usefull count,Funny count,Cool count
//     } catch (err) {
//         return res.status(500).send({ success: false, Message: 'Internal Server Error' });
//     }
// }

