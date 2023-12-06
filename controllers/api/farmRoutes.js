const router = require("express").Router();
const { Farm } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (res, req) => {
  try {
    const newFarm = await Farm.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFarm);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
