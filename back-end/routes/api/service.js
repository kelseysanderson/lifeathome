const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

router.route("/")
  .get(serviceController.findAll)
  .post(serviceController.create);

router.route("/:id")
  .get(serviceController.findById)
  .put(serviceController.update)
  .delete(serviceController.remove);

module.exports = router;
