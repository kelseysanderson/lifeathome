const router = require("express").Router();
const siteController = require("../../controllers/siteController");


router.route("/")
  .get(siteController.findAll)
  .post(siteController.create);

router.route("/:id")
  .get(siteController.findById)
  .put(siteController.update)
  .delete(siteController.remove);

router.route("/auth/:id") 
  .put(siteController.save)
  .post(siteController.auth)

module.exports = router;
