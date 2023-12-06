const router = require("express").Router();
const userRoutes = require("./userRoutes");
const farmRoutes = require("./farmRoutes");
const productRoutes = require("./productRoutes");
const investmentRoutes = require("./investmentRoutes");

router.use("/users", userRoutes);
router.use("/farms", farmRoutes);
router.use("/products", productRoutes);
router.use("/investments", investmentRoutes);

module.exports = router;
