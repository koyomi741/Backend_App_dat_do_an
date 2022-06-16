const {Food, Restaurant, Receipt, ReceiptItem} = require("../model/model");

const receiptItemController = {

    addOne: async(req,res) => {
        try {
            const newReceiptItem = new ReceiptItem(req.body); 
            const saveReceiptItem = await newReceiptItem.save();
            if(req.body.receipt) {
                const receipt = Receipt.findById(req.body.receipt)
                await receipt.updateOne({ $push: { receiptItem : saveReceiptItem._id }})
            }
            res.status(200).json(saveReceiptItem);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL 
    getAll : async(req,res) => {
        try {
            const allReceiptItem = await ReceiptItem.find();
            res.status(200).json(allReceiptItem);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET ONE 
    getOne :  async(req,res) => { 
        try {
            const oneReceiptItem = await ReceiptItem.findById(req.params.id).populate("food").populate("receipt");    
            res.status(200).json(oneReceiptItem);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },
}

module.exports = receiptItemController;