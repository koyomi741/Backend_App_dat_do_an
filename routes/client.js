const  clientController = require("../controllers/clientController");

const router  = require("express").Router();

//ADD FOOD
router.post("/addOne", clientController.addClient );

//ADD FOOD
router.post("/insertMany", clientController.insertManyClient );

//GET ALL DATA FOOD
router.get("/getAll", clientController.getAllClient);

// GET ONE FOOD
router.get("/getOne/:id", clientController.getOneClient);

//GET BY ACCOUNT
router.get("/getByAccount/:account", clientController.getByAccount);

// UPDATE  ONE
router.put("/updateOne/:id", clientController.updateOneClient);

// DELETE ONE
router.delete("/deleteById/:id", clientController.deleteById );

module.exports = router;