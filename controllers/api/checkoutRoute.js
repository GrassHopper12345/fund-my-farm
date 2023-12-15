require('dotenv').config()
const router = require('express').Router()
const { Product } = require('../../models')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
  console.log('123')
  try {
    const products = await Product.findAll();

    const lineItems = products.map((product) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.product_name,
            },
            unit_amount: product.price * 100,
        },
        quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://localhost:3001/success',
      cancel_url: 'https://localhost:3001/cancel',
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;


// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
