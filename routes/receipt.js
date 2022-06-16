const  receiptController = require("../controllers/receiptController");

const router  = require("express").Router();

//ADD 
router.post("/addOne", receiptController.addOne );

//GET ALL DATA 
router.get("/getAll", receiptController.getAll);

// GET ONE 
router.get("/getOne/:id", receiptController.getOne);

//GET BY CLIENT
router.get("/getByClient/:id", receiptController.getByClient);

module.exports = router;