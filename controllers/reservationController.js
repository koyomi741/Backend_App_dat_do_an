const {Restaurant, Reservation, Client} = require("../model/model");

const reservationController = {

    addOne: async(req,res) => {
        try {
            const newReservation = new Reservation(req.body); // chấp nhận nhwungx thửu có trong bảng Restaurant
            const saveReservation = await newReservation.save();
            res.status(200).json(saveReservation);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET ALL RESTA
    getAll : async(req,res) => {
        try {
            const allReservation = await Reservation.find();
            res.status(200).json(allReservation);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    // GET ONE
    getOne :  async(req,res) => { 
        try {
            const oneReservation = await Reservation.findById(req.params.id).populate("restaurant").populate("client");    
            res.status(200).json(oneReservation);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },

    //GET BY CLIENT
    getByClient : async(req,res) => {
        try {
            const receipt1 = await Reservation.find({client : req.params.id}).populate("client").populate("restaurant");
            res.status(200).json(receipt1);
        } catch (error) {
            res.status(500).json(error);    // HPPT REQUEST CODE
        }
    },
}

module.exports = reservationController;