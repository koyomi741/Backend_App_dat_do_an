const {Food, Restaurant, Client} = require("../model/model");

const clientController = {
    //ADD 
    addClient: async(req,res) => {
        // res.status(200).json(req.body);
        try {
            const newClient = new Client(req.body); // chấp nhận nhwungx thửu có trong bảng Restaurant
            const saveClient = await newClient.save();
            res.status(200).json(saveClient);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // ADD MANY
    insertManyClient: async(req,res) => {
        Client.insertMany(req.body).then((result) => {
            res.status(201).send(result);
        }).catch((err) => {
            res.status(400).send(err);
        })
    },

    //GET ALL 
    getAllClient : async(req,res) => {
        try {
            const allClient = await Client.find();
            res.status(200).json(allClient);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET ONE 
    getOneClient :  async(req,res) => { 
        try {
            const oneClient = await Client.findById(req.params.id);    
            res.status(200).json(oneClient);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET BY ACCOUNT
    getByAccount: async(req,res) => { 
        try {
            const oneClient = await Client.find({account : req.params.account});    
            res.status(200).json(oneClient);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //UPDATE FOOD
    updateOneClient :  async(req,res) => { 
        try {
            const oneClient = await Client.findById(req.params.id);    
            await oneClient.updateOne({ $set : req.body });
            res.status(200).json("Updated successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //DELETE ONE
    deleteById : async(req,res) => { 
        try {
            await Client.findByIdAndDelete(req.params.id);    
            res.status(200).json("Deleted successfully ^^!");
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },
};

module.exports = clientController;