const { Products } = require('../models/Product');

const productData = [
    {
        product_name: 'Carrots',
        price: .99,
        stock: 14,
        category_id: 1,
      },
      {
        product_name: 'Potatoes',
        price: 1.0,
        stock: 25,
        category_id: 5,
      },
      {
        product_name: 'Tomatoes',
        price: 1.99,
        stock: 12,
        category_id: 4,
      },
      {
        product_name: 'Chicken Thighs',
        price: 2.99,
        stock: 50,
        category_id: 3,
      },
      {
        product_name: 'Ground Beef',
        price: 3.99,
        stock: 22,
        category_id: 2,
      },
    ];
    
    const seedProducts = () => Product.bulkCreate(productData);
    
    module.exports = seedProducts;