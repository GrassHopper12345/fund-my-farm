const router = require("express").Router();
const { Product, Farm } = require("../../models");

//get all products
router.get("/", async (req, res) => {
  //find all products
  try {
    const productData = await Product.findAll({
      include: [{ model: Farm }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Farm }],
    });
    if (!productData) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
