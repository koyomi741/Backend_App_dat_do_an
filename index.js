const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// ==========================================================================
const restaurantRoute = require("./routes/restaurant");   
const foodRoute = require("./routes/food") 
const clientRoute = require("./routes/client");
const receiptRoute = require("./routes/receipt");
const receiptItemRoute = require("./routes/receiptItem");
const reservationRoute = require("./routes/reservation");

// ==========================================================================


dotenv.config();

//connect to MongoDb
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);
app.use(express.json());


// ROUTES
app.use("/restaurant", restaurantRoute);
app.use("/food", foodRoute);
app.use("/client",clientRoute);
app.use("/receipt",receiptRoute);
app.use("/receiptItem",receiptItemRoute);
app.use("/reservation",reservationRoute);
//
app.listen(3000, () => console.log("http://localhost:" + '3000'));