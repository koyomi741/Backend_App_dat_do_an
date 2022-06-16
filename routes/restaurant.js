const  restaurantController = require("../controllers/restaurantController");

const router  = require("express").Router();

// ADD RESTAURANT
router.post("/addOne", restaurantController.addRestaurant );

// GET ALL DATA RESTAURANT
router.get("/getAll", restaurantController.getAllRestaurant);

// GET A RESTAURANT
router.get("/getOne/:id", restaurantController.getOneRestaurant);

// GET BY CATEGORY
router.get("/getByCategory/:category", restaurantController.getByCategory);

//SEARCH BY NAME
router.get("/searchByName/:name", restaurantController.searchByName);

// UPDATE 
router.put("/updateOne/:id", restaurantController.updateOneRestaurant);

// DELETE
router.delete("/deleteOne/:id", restaurantController.deleteOneRestaurant);

router.post("/insertMany", restaurantController.insertManyClient );

module.exports = router;