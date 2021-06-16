const router = require("express").Router();

const commentRoutes = require("./comment");
const userRoutes = require("./user");
const postRoutes = require("./post");
const siteRoutes = require("./site");

router.use("/comment", commentRoutes);
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/site", siteRoutes);

module.exports = router;
