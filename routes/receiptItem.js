const  receiptItemController = require("../controllers/receiptItemController");

const router  = require("express").Router();

//ADD 
router.post("/addOne", receiptItemController.addOne );

//GET ALL DATA 
router.get("/getAll", receiptItemController.getAll);

// GET ONE 
router.get("/getOne/:id", receiptItemController.getOne);

module.exports = router;