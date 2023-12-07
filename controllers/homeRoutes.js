const router = require("express").Router();
const { Farm } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("help");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
