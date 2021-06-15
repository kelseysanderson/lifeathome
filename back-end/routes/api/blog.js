const router = require("express").Router();
const blogController = require("../../controllers/blogController");

router.route("/")
  .get(blogController.findAll)
  .post(blogController.create);

router.route("/:id")
  .get(blogController.findById)
  .put(blogController.update)
  .delete(blogController.remove);

module.exports = router;
