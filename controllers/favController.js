const Fav = require('../models/Fav')

const addFav = async (req, res) => {
  const { userId, dishId } = req.body;
  
  if (!userId || !dishId) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  try {
    const existingFavorite = await Fav.findOne({
      userId,
      'favDishes.dishId': dishId,
    });

    if (existingFavorite) {
      return res.status(409).send({ error: 'Dish already exists in favorites' });
    }

    const newFavorite = new Fav({ userId, favDishes: [{ dishId }] });
    await newFavorite.save();
    console.log(newFavorite)

    res.status(201).send({ message: 'Dish added to favorites successfully', newFavorite: newFavorite });
  } catch (error) {
    res.status(500).json({ success: false, message: "Interval server error" });
  }
};



const getAllFavoriteDishes = async (req, res) => {
  const { userId } = req.query; 

  try {
    const favorites = await Fav.find(userId ? { userId } : {}) // Filter by userId if provided
      .populate('favDishes.dishId'); 

    res.status(200).send(favorites);
  } catch (err) {
    res.status(500).json({ success: false, message: "Interval server error" });
  }
};


module.exports = {addFav, getAllFavoriteDishes}
