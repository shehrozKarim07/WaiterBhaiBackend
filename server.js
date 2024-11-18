require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require('cors');
const connect = require('./config/db.js');;
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes.js');
const dishRoutes = require('./routes/dishRoutes.js');
const hotelRoutes = require('./routes/hotelRoutes');
const bussinessRoutes = require('./routes/bussinessRoutes');
const customerRoutes = require('./routes/customerRoutes');
const reviewerRoutes = require('./routes/hotelReviewRoutes.js')
const collectionRoutes = require('./routes/collectionRoutes')
const reportRoutes = require('./routes/reportRoutes')
const complimentRoutes = require('./routes/complimentRoutes.js')
const favRoutes = require('./routes/favRoutes.js')
const path = require("path")

const port = process.env.PORT || 4000;
app.use(express.json())

app.use("/public/images", express.static(path.join(__dirname, "public/images")))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors());

//connect to the database

app.use('/user', userRoutes);
app.use('/dish', dishRoutes);
app.use('/hotel', hotelRoutes);
app.use('/bussiness', bussinessRoutes);
app.use('/customer', customerRoutes);
app.use('/hotelreview', reviewerRoutes);
app.use('/collections', collectionRoutes);
app.use('/report', reportRoutes);
app.use('/compliment', complimentRoutes);
app.use('/favorites', favRoutes)

const start = async () => {
    await connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

start()


