const router = require("express").Router();
const userRoutes = require("./userRoutes");
const farmRoutes = require("./farmRoutes");
const productRoutes = require("./productRoutes");
const checkoutRoute = require(("./checkoutRoute"));
// const investmentRoutes = require("./investmentRoutes");

router.use("/users", userRoutes);
router.use("/farms", farmRoutes);
router.use("/products", productRoutes);
router.use("/create-checkout-session", checkoutRoute);
// router.use("/investment", investmentRoutes);


module.exports = router;
