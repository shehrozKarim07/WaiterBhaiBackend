const mongoose = require('mongoose');

const BussinessSchema = new mongoose.Schema({
   country: {
      type: String
   },
   name: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   phone: {
      type: String
   },
   website: {
      type: String,

   },
   role: {
      type: String,
      default: 'business'
   }



});
module.exports = mongoose.model('Bussiness', BussinessSchema);
