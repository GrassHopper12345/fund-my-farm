require("dotenv").config();
const router = require("express").Router();
const { Product } = require("../../models");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res, next) => {
  try {
    const products = await Product.findAll();

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.product_name,
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.protocol}://${req.get("host")}/success`,
      cancel_url: `${req.protocol}://${req.get("host")}/cancel`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    next(error);
  }
});

module.exports = router;


// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
