const  foodController = require("../controllers/foodController");

const router  = require("express").Router();

//ADD FOOD
router.post("/addOne", foodController.addFood );

//GET ALL DATA FOOD 
router.get("/getAll", foodController.getAllFood);

// GET ONE FOOD
router.get("/getOne/:id", foodController.getOneFood);

// GET BY RESTAURANT
router.get("/getByRestaurant/:restaurant", foodController.getByRestaurant);

// UPDATE  ONE
router.put("/updateOne/:id", foodController.updateOneFood);

// DELETE ONE
router.delete("/deleteById/:id", foodController.deleteById );

router.post("/insertMany", foodController.insertMany );

module.exports = router;