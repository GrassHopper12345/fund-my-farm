const User = require('./User');
const Farm = require('./Farm');
const ProductToFarm = require('./ProductToFarm');
const Product = require('./Product');

User.hasMany(Farm, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Farm.belongsTo(User, {
    foreignKey: 'user_id',
});

Product.belongsToMany(Farm, {
    foreignKey: 'product_id',
    through: ProductToFarm,
});

Farm.belongsToMany(Product, {
    foreignKey: 'farm_id',
    through: ProductToFarm,
});

module.exports = { User, Farm, ProductToFarm, Product };