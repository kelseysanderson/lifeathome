const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.route("/")
  .get(commentController.findAll)
  .post(commentController.create);

router.route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;
