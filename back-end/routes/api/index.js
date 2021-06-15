const router = require("express").Router();

const blogRoutes = require("./blog");
const homeRoutes = require("./home");
const servicesRoutes = require("./services");
const siteRoutes = require("./site");

router.use("/blog", blogRoutes);
router.use("/home", homeRoutes);
router.use("/services", servicesRoutes);
router.use("/site", siteRoutes);

module.exports = router;
