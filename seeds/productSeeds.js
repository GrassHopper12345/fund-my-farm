const Products  = require('../models/Product');

const productData = [
    {
        product_name: 'Carrots',
        price: .99,
        stock: 14,
      },
      {
        product_name: 'Potatoes',
        price: 1.0,
        stock: 25,
      },
      {
        product_name: 'Tomatoes',
        price: 1.99,
        stock: 12,
      },
      {
        product_name: 'Chicken Thighs',
        price: 2.99,
        stock: 50,
      },
      {
        product_name: 'Ground Beef',
        price: 3.99,
        stock: 22,
      },
    ];
    
    const seedProducts = () => Products.bulkCreate(productData);
    
    module.exports = seedProducts;