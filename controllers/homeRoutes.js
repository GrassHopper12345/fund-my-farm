const router = require("express").Router();
const { Farm } = require("../models");
const withAuth = require("../utils/auth");

router.get("/users", async (req, res) => {
  try {
    console.log(123);
  } catch (err) {
    res.status(400).json(err);
  }
});
