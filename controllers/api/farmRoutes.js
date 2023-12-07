const router = require("express").Router();
const { Farm } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
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
// Get all farms
router.get("/", async (res, req) => {
  try {
    const farmData = await Farm.findAll();
    res.status(200).json(farmData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const farmData = await Farm.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!farmData) {
      res.status(404).json({ message: "No farm found with this id!" });
      return;
    }

    res.status(200).json(farmData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
