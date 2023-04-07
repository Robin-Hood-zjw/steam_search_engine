const express = require("express");
const DefaultController = require("./controllers/DefaultController");

const router = express.Router();

router.param("id", DefaultController.checkID);

router
  .route("/")
  .get(DefaultController.getAllTours)
  .post(DefaultController.checkBody, DefaultController.createTour);

router
  .route("/:id")
  .get(DefaultController.getTour)
  .patch(DefaultController.updateTour)
  .delete(DefaultController.deleteTour);

module.exports = router;
