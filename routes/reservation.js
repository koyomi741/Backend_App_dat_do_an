const  reservationController = require("../controllers/reservationController");

const router  = require("express").Router();

//ADD 
router.post("/addOne", reservationController.addOne );

//GET ALL DATA 
router.get("/getAll", reservationController.getAll);

// GET ONE 
router.get("/getOne/:id", reservationController.getOne);

//GET BY CLIENT
router.get("/getByClient/:id", reservationController.getByClient);

module.exports = router;