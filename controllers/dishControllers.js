const Dish = require('../models/Dish')

// create dish 
const createDish = async (req, res) => {
    try {
        const { hotelId, name, price, imageUrl, imageDescription, imageFoodType } = req.body;

        const images = req.files?.map(file => file.filename);

        const newDish = new Dish({
            hotelId,
            name,
            price,
            images,
            imageUrl,
            imageDescription,
            imageFoodType
        });

        console.log("New Dish:", newDish);

        const savedDish = await newDish.save();

        res.status(201).json({ success: true, message: "Dish created", savedDish });
    } catch (error) {
        console.log("Error creating dish:", error);
        res.status(500).json({ success: false, message: "internal server error" });
    }
};



// get all dishes
const getAll = async (req, res) => {
    try {
        const { hotelId } = req.params
        const dishes = await Dish.find({ hotelId })
        if (!dishes.length) {
            return res.status(201).json([]);
        }
        res.status(200).json({ success: true, dishes });
    } catch (error) {
        console.error('Error fetching dishes:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const getDishById = async (req, res) => {
    const { hotelId } = req.params;
    console.log(hotelId);

    try {
        const dish = await Dish.findById({ hotelId });
        if (!dish.length) {
            return res.status(404).json([]);
        }
        res.status(200).json({ success: true, data: dish });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// const getDishById = async (req, res) => {
//     const id = req.params;
//     console.log(id);
//     try {
//         const dish = await Dish.findOne({ id });
//         if (!dish) {
//             return res.status(404).json({ success: false, message: 'Dish not found' });
//         }
//         res.status(200).json({ success: true, data: dish });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// }

const updateDish = async (req, res) => {
    try {
        const { id } = req.params.id;
        const dish = await Dish.findById(id);
        if (!dish) {
            res.status(404).json({ success: false, message: "not dish found using this id" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


// Route to delete a dish by ID
const deletebyid = async (req, res) => {
    try {
        const { id: DishID } = req.params;

        // Use findByIdAndDelete to remove the dish by its ID
        const deletedDish = await Dish.findByIdAndDelete(DishID);

        if (!deletedDish) {
            return res.status(404).json({ success: false, message: `No collection with ID ${DishID}` });
        }

        res.status(200).json({ success: true, message: 'dish deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = { createDish, getAll, getDishById, updateDish, deletebyid }
