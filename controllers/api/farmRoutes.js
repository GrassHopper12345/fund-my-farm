const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { Farm, User, Product } = require("../../models");
const withAuth = require("../../utils/auth");

// Validation middleware for farm creation
const validateFarm = [
  body("farm_name")
    .trim()
    .notEmpty()
    .withMessage("Farm name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Farm name must be between 2 and 100 characters"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description must be less than 500 characters"),
];

// Helper function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

router.post(
  "/",
  withAuth,
  validateFarm,
  handleValidationErrors,
  async (req, res) => {
    try {
      const newFarm = await Farm.create({
        ...req.body,
        user_id: req.session.user_id,
      });

      res.status(200).json(newFarm);
    } catch (err) {
      res.status(400).json({ message: err.message || "Failed to create farm" });
    }
  }
);
// Get all farms
router.get("/", async (req, res) => {
  try {
    const farmData = await Farm.findAll({
      include: [
        { model: User },
        {
          model: Product,
          separate: true, // Load products separately to avoid duplicate farm rows
        },
      ],
      distinct: true, // Ensure unique farms
    });
    res.status(200).json(farmData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single farm by ID
router.get("/:id", async (req, res) => {
  try {
    const farmData = await Farm.findByPk(req.params.id, {
      include: [{ model: User }, { model: Product }],
    });

    if (!farmData) {
      res.status(404).json({ message: "No farm found with this id!" });
      return;
    }

    res.status(200).json(farmData);
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to fetch farm" });
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
