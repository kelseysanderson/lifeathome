const router = require("express").Router();

const commentRoutes = require("./comment");
const emailRoutes = require("./email");
const postRoutes = require("./post");
const siteRoutes = require("./site");
const serviceRoutes = require("./service")

router.use("/comment", commentRoutes);
router.use("/email", emailRoutes);
router.use("/post", postRoutes);
router.use("/site", siteRoutes);
router.use("/service", serviceRoutes);

module.exports = router;
