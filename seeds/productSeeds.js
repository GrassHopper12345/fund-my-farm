const Product = require('../models/Product');

const productData = [
  {
    product_name: 'Carrots',
    price: .99,
    stock: 14,
    farm_id: 1
  },
  {
    product_name: 'Potatoes',
    price: 1.0,
    stock: 25,
    farm_id: 2
  },
  {
    product_name: 'Tomatoes',
    price: 1.99,
    stock: 12,
    farm_id: 3
  },
  {
    product_name: 'Chicken',
    price: 2.99,
    stock: 50,
    farm_id: 4
  },
  {
    product_name: 'Ground Beef',
    price: 3.99,
    stock: 22,
    farm_id: 5
  },
  {
    product_name: 'Lamb',
    price: 5.99,
    stock: 22,
    farm_id: 6
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;