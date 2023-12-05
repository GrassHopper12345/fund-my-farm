const router = require("express").Router();
const userRoutes = require("./userRoutes");
const farmRoutes = require("./farmRoutes");
const investmentRoutes = require("./investmentRoutes");
const productRoutes = require("./productRoutes");

router.use("/users", userRoutes);
router.use("/farms", farmRoutes);
router.use("/investment", investmentRoutes);
router.use("/products", productRoutes);

module.exports = router;
