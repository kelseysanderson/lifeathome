const router = require("express").Router();

const commentRoutes = require("./comment");
const emailRoutes = require("./email");
const postRoutes = require("./post");
const siteRoutes = require("./site");

router.use("/comment", commentRoutes);
router.use("/email", emailRoutes);
router.use("/post", postRoutes);
router.use("/site", siteRoutes);

module.exports = router;
