const {Food, Restaurant, Receipt, ReceiptItem} = require("../model/model");

const receiptController = {

    addOne: async(req,res) => {
        try {
            const newReceipt = new Receipt(req.body); // chấp nhận nhwungx thửu có trong bảng Restaurant
            const saveReceipt = await newReceipt.save();
            res.status(200).json(saveReceipt);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTA
    getAll : async(req,res) => {
        try {
            const allReceipt = await Receipt.find();
            res.status(200).json(allReceipt);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET ONE
    getOne :  async(req,res) => { 
        try {
            const oneReceipt = await Receipt.findById(req.params.id).populate("client").populate("receiptItem");    
            res.status(200).json(oneReceipt);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET BY CLIENT
    getByClient : async(req,res) => {
        try {
            const receipt1 = await Receipt.find({client : req.params.id}).populate("client").populate("receiptItem");
            res.status(200).json(receipt1);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

}

module.exports = receiptController;