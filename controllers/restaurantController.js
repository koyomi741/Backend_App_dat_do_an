const {Restaurant, Food} = require("../model/model");

const restaurantController = {
    //ADD RESTAURANT
    addRestaurant: async(req,res) => {
        // res.status(200).json(req.body);
        try {
            const newRestaurant = new Restaurant(req.body); // chấp nhận nhwungx thửu có trong bảng Restaurant
            const saveRestaurant = await newRestaurant.save();
            res.status(200).json(saveRestaurant);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTAURANT
    getAllRestaurant : async(req,res) => {
        try {
            const allRestaurant = await Restaurant.find();
            res.status(200).json(allRestaurant);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ONE RESTAURANT
    getOneRestaurant :  async(req,res) => { 
        try {
            const oneRestaurant = await Restaurant.findById(req.params.id).populate("food");    
            res.status(200).json(oneRestaurant);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTAURANT
    getByCategory : async(req,res) => {
        try {
            const allRestaurant = await Restaurant.find({category : req.params.category});
            res.status(200).json(allRestaurant);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTAURANT
    searchByName : async(req,res) => {
        try {
            const allRestaurant = await Restaurant.find({name : {'$regex' : req.params.name, '$options' : 'i'} });
            res.status(200).json(allRestaurant);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //UPDATE RESTAURANT
    updateOneRestaurant :  async(req,res) => { 
        try {
            const oneRestaurant = await Restaurant.findById(req.params.id);    
            await oneRestaurant.updateOne({ $set : req.body });
            res.status(200).json("Updated successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // DELETE RESTAURANT
    deleteOneRestaurant : async(req,res) => {
        try {
            await Food.deleteMany({ restaurant : req.params.id })
            await Restaurant.findById(req.params.id);    
            res.status(200).json("Deleted successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // ADD MANY
    insertManyClient: async(req,res) => {
        Restaurant.insertMany(req.body).then((result) => {
            res.status(201).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    },

};

module.exports = restaurantController;