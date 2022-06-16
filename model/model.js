//  file model sử dụng để tạo khung cho database
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

// ================================================================================
    // ******************** RESTAURANT ********************************************

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,     // bắt buộc có
    },
    category: {
        type: String,
        required: true,     // bắt buộc có
    },
    reviews: {
        type: Number,
        required: true,     // bắt buộc có
    },
    rating: {
        type: String,
        required: true,     // bắt buộc có
    },
    image_url: {
        type: String,
        required: true,     // bắt buộc có
    },
    location: {
        type: [Number, Number],
        required: true,     // bắt buộc có
    },
    food : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "Food"
        }
    ]
})

let Restaurant = mongoose.model("Restaurant", restaurantSchema)

// ================================================================================
    // ******************** FOOD ********************************************


const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
    },
    description: {
        type: String,
        required: true,
        min: 6,
    },
    price: {
        type: String,
        required: true,
        min: 6,
    },
    image: {
        type: String,
        required: true,
        min: 6,
    },
    category: {
        type: String,
        required: true,
        min: 6,
    },
    measue: {
        type: String,
        required: true,
    },
    restaurant: 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }
})


let Food = mongoose.model("Food", foodSchema)

// ================================================================================
    // ******************** CLIENT ********************************************
const clientSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true,
        min: 6,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      name: {
        type: String,
        required: true,
        min: 6,
      },
      birth: {
        type: String,
        required: true,
        min: 6,
      },
      phone: {
        type: String,
        required: true,
        min: 6,
      },
      address: {
        type: String,
        required: true,
        min: 6,
      },
      card: {
        type: String,
        required: true,
      },
 
});

let Client = mongoose.model("Client", clientSchema);

// ================================================================================
    // ******************** Receipt ********************************************
const receiptSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Client"
    },
    total: {
        type: Number,
    },
    time: {
        type: String,
        required: true,
    },
    receiptItem : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ReceiptItem",
        }
    ]
});

let Receipt = mongoose.model("Receipt", receiptSchema);

// ================================================================================
    // ******************** ReceiptItem ********************************************
const receiptItemSchema = new mongoose.Schema({
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        receipt: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Receipt",
            required: true,
        }
    });
    
let ReceiptItem = mongoose.model("ReceiptItem", receiptItemSchema);

// ================================================================================
    // ******************** Reservation ********************************************
const reservationSchema = new mongoose.Schema({
        restaurant : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true,
        },
        client : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        note: {
            type: String,
        }
    });
    
let Reservation = mongoose.model("Reservation", reservationSchema);
// ================================================================================
module.exports= {Restaurant, Food, Client, Receipt, ReceiptItem, Reservation};