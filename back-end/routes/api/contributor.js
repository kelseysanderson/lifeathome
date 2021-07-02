const router = require("express").Router();
const contributorController = require("../../controllers/contributorController");

router.route("/")
  .get(contributorController.findAll)
  .post(contributorController.create);

router.route("/:id")
  .get(contributorController.findById)
  .put(contributorController.update)
  .delete(contributorController.remove);

module.exports = router;
