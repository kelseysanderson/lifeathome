const router = require("express").Router();
const emailController = require("../../controllers/emailController");

router.route("/")
  .get(emailController.findAll)
  .post(emailController.create);

router.route("/:id")
  .get(emailController.findById)
  .put(emailController.update)
  .delete(emailController.remove);

module.exports = router;
