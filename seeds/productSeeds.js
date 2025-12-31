const Product = require('../models/Product');

const productData = [
  // Bob's Mules (farm_id: 1)
  {
    product_name: 'Carrots',
    price: 0.99,
    stock: 14,
    farm_id: 1
  },
  {
    product_name: 'Organic Feed',
    price: 12.99,
    stock: 30,
    farm_id: 1
  },
  {
    product_name: 'Fresh Eggs',
    price: 4.99,
    stock: 50,
    farm_id: 1
  },
  // J's Veggies (farm_id: 2)
  {
    product_name: 'Potatoes',
    price: 1.0,
    stock: 25,
    farm_id: 2
  },
  {
    product_name: 'Lettuce',
    price: 2.50,
    stock: 20,
    farm_id: 2
  },
  {
    product_name: 'Bell Peppers',
    price: 3.99,
    stock: 15,
    farm_id: 2
  },
  // Bubba's Organics (farm_id: 3)
  {
    product_name: 'Tomatoes',
    price: 1.99,
    stock: 12,
    farm_id: 3
  },
  {
    product_name: 'Cucumbers',
    price: 1.50,
    stock: 18,
    farm_id: 3
  },
  {
    product_name: 'Zucchini',
    price: 1.75,
    stock: 22,
    farm_id: 3
  },
  // Shoots and Ladders Farms (farm_id: 4)
  {
    product_name: 'Chicken',
    price: 2.99,
    stock: 50,
    farm_id: 4
  },
  {
    product_name: 'Heirloom Beans',
    price: 4.50,
    stock: 30,
    farm_id: 4
  },
  {
    product_name: 'Kale',
    price: 2.99,
    stock: 25,
    farm_id: 4
  },
  // Jolly Farms (farm_id: 5)
  {
    product_name: 'Ground Beef',
    price: 3.99,
    stock: 22,
    farm_id: 5
  },
  {
    product_name: 'Grass-Fed Steak',
    price: 12.99,
    stock: 15,
    farm_id: 5
  },
  {
    product_name: 'Free-Range Chicken',
    price: 5.99,
    stock: 30,
    farm_id: 5
  },
  // Tasty Dirt (farm_id: 6)
  {
    product_name: 'Lamb',
    price: 5.99,
    stock: 22,
    farm_id: 6
  },
  {
    product_name: 'Beets',
    price: 2.25,
    stock: 20,
    farm_id: 6
  },
  {
    product_name: 'Fresh Herbs',
    price: 3.50,
    stock: 40,
    farm_id: 6
  },
  // Green Valley Cooperative (farm_id: 7)
  {
    product_name: 'Mixed Greens',
    price: 3.99,
    stock: 35,
    farm_id: 7
  },
  {
    product_name: 'Radishes',
    price: 1.99,
    stock: 28,
    farm_id: 7
  },
  {
    product_name: 'Turnips',
    price: 2.50,
    stock: 20,
    farm_id: 7
  },
  // Mountain View Dairy (farm_id: 8)
  {
    product_name: 'Fresh Milk',
    price: 4.99,
    stock: 40,
    farm_id: 8
  },
  {
    product_name: 'Artisan Cheese',
    price: 8.99,
    stock: 25,
    farm_id: 8
  },
  {
    product_name: 'Yogurt',
    price: 5.50,
    stock: 30,
    farm_id: 8
  },
  // Sunrise Orchard (farm_id: 9)
  {
    product_name: 'Apples',
    price: 2.99,
    stock: 50,
    farm_id: 9
  },
  {
    product_name: 'Peaches',
    price: 3.99,
    stock: 35,
    farm_id: 9
  },
  {
    product_name: 'Berries',
    price: 4.99,
    stock: 25,
    farm_id: 9
  },
  // Heritage Grain Farm (farm_id: 10)
  {
    product_name: 'Heirloom Wheat',
    price: 6.99,
    stock: 40,
    farm_id: 10
  },
  {
    product_name: 'Ancient Grains',
    price: 7.99,
    stock: 30,
    farm_id: 10
  },
  {
    product_name: 'Flour',
    price: 5.99,
    stock: 35,
    farm_id: 10
  },
  // Riverbend Aquaponics (farm_id: 11)
  {
    product_name: 'Tilapia',
    price: 6.99,
    stock: 45,
    farm_id: 11
  },
  {
    product_name: 'Lettuce (Hydroponic)',
    price: 3.50,
    stock: 50,
    farm_id: 11
  },
  {
    product_name: 'Basil',
    price: 2.99,
    stock: 40,
    farm_id: 11
  },
  // Wildflower Apiary (farm_id: 12)
  {
    product_name: 'Raw Honey',
    price: 9.99,
    stock: 30,
    farm_id: 12
  },
  {
    product_name: 'Beeswax',
    price: 7.99,
    stock: 20,
    farm_id: 12
  },
  {
    product_name: 'Honeycomb',
    price: 12.99,
    stock: 15,
    farm_id: 12
  },
  // Prairie Grass Ranch (farm_id: 13)
  {
    product_name: 'Grass-Fed Beef',
    price: 8.99,
    stock: 25,
    farm_id: 13
  },
  {
    product_name: 'Beef Roast',
    price: 11.99,
    stock: 20,
    farm_id: 13
  },
  {
    product_name: 'Beef Stew Meat',
    price: 7.99,
    stock: 30,
    farm_id: 13
  },
  // Coastal Shellfish Farm (farm_id: 14)
  {
    product_name: 'Oysters',
    price: 14.99,
    stock: 40,
    farm_id: 14
  },
  {
    product_name: 'Clams',
    price: 9.99,
    stock: 35,
    farm_id: 14
  },
  {
    product_name: 'Mussels',
    price: 8.99,
    stock: 30,
    farm_id: 14
  },
  // Urban Microgreens (farm_id: 15)
  {
    product_name: 'Pea Shoots',
    price: 4.99,
    stock: 50,
    farm_id: 15
  },
  {
    product_name: 'Sunflower Shoots',
    price: 5.99,
    stock: 45,
    farm_id: 15
  },
  {
    product_name: 'Radish Microgreens',
    price: 4.50,
    stock: 40,
    farm_id: 15
  },
  // Maple Ridge Farm (farm_id: 16)
  {
    product_name: 'Maple Syrup',
    price: 15.99,
    stock: 25,
    farm_id: 16
  },
  {
    product_name: 'Heritage Pork',
    price: 7.99,
    stock: 30,
    farm_id: 16
  },
  {
    product_name: 'Squash',
    price: 2.99,
    stock: 35,
    farm_id: 16
  },
  // Desert Bloom Farm (farm_id: 17)
  {
    product_name: 'Prickly Pear',
    price: 4.99,
    stock: 20,
    farm_id: 17
  },
  {
    product_name: 'Dates',
    price: 6.99,
    stock: 30,
    farm_id: 17
  },
  {
    product_name: 'Cactus Pads',
    price: 3.99,
    stock: 25,
    farm_id: 17
  },
  // Forest Mushroom Farm (farm_id: 18)
  {
    product_name: 'Shiitake Mushrooms',
    price: 8.99,
    stock: 30,
    farm_id: 18
  },
  {
    product_name: 'Oyster Mushrooms',
    price: 7.99,
    stock: 35,
    farm_id: 18
  },
  {
    product_name: 'Lion\'s Mane',
    price: 12.99,
    stock: 20,
    farm_id: 18
  },
  // Pasture Perfect Poultry (farm_id: 19)
  {
    product_name: 'Free-Range Eggs',
    price: 5.99,
    stock: 60,
    farm_id: 19
  },
  {
    product_name: 'Whole Chicken',
    price: 8.99,
    stock: 25,
    farm_id: 19
  },
  {
    product_name: 'Turkey',
    price: 15.99,
    stock: 15,
    farm_id: 19
  },
  // Vineyard Estate (farm_id: 20)
  {
    product_name: 'Table Grapes',
    price: 4.99,
    stock: 40,
    farm_id: 20
  },
  {
    product_name: 'Wine Grapes',
    price: 6.99,
    stock: 30,
    farm_id: 20
  },
  {
    product_name: 'Grape Leaves',
    price: 3.99,
    stock: 25,
    farm_id: 20
  },
];

const seedProduct = () => Product.bulkCreate(productData);

module.exports = seedProduct;