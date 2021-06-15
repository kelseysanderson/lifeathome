const router = require("express").Router();
const homeController = require("../../controllers/homeController");

router.route("/")
  .get(homeController.findAll)
  .post(homeController.create);

router.route("/:id")
  .get(homeController.findById)
  .put(homeController.update)
  .delete(homeController.remove);

module.exports = router;
