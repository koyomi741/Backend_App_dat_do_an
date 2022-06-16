const mongoose = require("mongoose");
const {Food, Restaurant} = require("../model/model");

const foodController = {
    //ADD RESTAURANT
    addFood: async(req,res) => {
        // res.status(200).json(req.body);
        try {
            const newFood = new Food(req.body); // chấp nhận nhwungx thửu có trong bảng Restaurant
            const saveFood = await newFood.save();
            if(req.body.restaurant) {
                // const restaurant = Food.find({_id : req.body.restaurant})
                const restaurant = Restaurant.findById(req.body.restaurant)
                await restaurant.updateOne({ $push: {food : saveFood._id }})
            }
            res.status(200).json(saveFood);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTAURANT
    getAllFood : async(req,res) => {
        try {
            const allFood = await Food.find();
            res.status(200).json(allFood);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET ONE FOOD
    getOneFood :  async(req,res) => { 
        try {
            const oneFood = await Food.findById(req.params.id).populate("restaurant");    
            res.status(200).json(oneFood);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

     // GET BY RESTAURANT
     getByRestaurant :  async(req,res) => { 
        try {
            const oneFood = await Food.find({ restaurant : req.params.restaurant});    
            res.status(200).json(oneFood);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //UPDATE FOOD
    updateOneFood :  async(req,res) => { 
        try {
            const oneFood = await Food.findById(req.params.id);    
            await oneFood.updateOne({ $set : req.body });
            res.status(200).json("Updated successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //DELETE ONE
    deleteById : async(req,res) => { 
        try {
            await Restaurant.updateMany( {books: req.params.id}, {$pull: {food: req.params.id}});
            await Food.findByIdAndDelete(req.params.id);    
            res.status(200).json("Deleted successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // ADD MANY
    insertMany: async(req,res) => {
        Food.insertMany(req.body).then((result) => {
            res.status(201).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    },
};

module.exports = foodController;