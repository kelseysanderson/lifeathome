const router = require("express").Router();
const featuredController = require("../../controllers/featuredController");

router.route("/")
  .get(featuredController.findAll)
  .post(featuredController.create);

router.route("/:id")
  .get(featuredController.findById)
  .put(featuredController.update)
  .delete(featuredController.remove);

module.exports = router;
