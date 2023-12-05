const ProductToFarm = require('../models/ProductToFarm.js');

const productToFarmData = [
  {
    product_id: 1,
    farm_id: 6,
  },
  {
    product_id: 1,
    farm_id: 7,
  },
  {
    product_id: 1,
    farm_id: 8,
  },
  {
    product_id: 2,
    farm_id: 6,
  },
  {
    product_id: 3,
    farm_id: 1,
  },
  {
    product_id: 3,
    farm_id: 3,
  },
  {
    product_id: 3,
    farm_id: 4,
  },
  {
    product_id: 3,
    farm_id: 5,
  },
  {
    product_id: 4,
    farm_id: 1,
  },
  {
    product_id: 4,
    farm_id: 2,
  },
  {
    product_id: 4,
    farm_id: 8,
  },
  {
    product_id: 5,
    farm_id: 3,
  },
];

const seedProductToFarm = () => ProductToFarm.bulkCreate(productToFarmData);

module.exports = seedProductToFarm;