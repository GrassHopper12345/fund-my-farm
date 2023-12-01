const router = require("express").Router();

const routes = require("./api");
const mainRoute = require("./homeRoutes");

router.use("/", mainRoute);
router.use("/api", routes);

module.exports = router;
