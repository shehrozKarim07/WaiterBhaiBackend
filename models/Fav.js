const mongoose = require ('mongoose');
const favSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    favDishes: [{
      dishId: {
        type: mongoose.Types.ObjectId,
        ref:'Product'
    },
    }]
  });
  
  const Fav = mongoose.model('Fav', favSchema);
  
  module.exports = Fav;