const User = require('./User');
const Farm = require('./Farm');
const ProductToFarm = require('./ProductToFarm');
const Product = require('./Product');
const Investment = require('./Investment');
const InvestmentForFarm = require('./InvestmentForFarm');
const UserToFarm = require('./UserToFarm');

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

Investment.belongsToMany(Farm, {
    foreignKey: 'farm_id',
    through: InvestmentForFarm
});

InvestmentForFarm.belongsToMany(User, {
    foreignKey: 'user_id',
    through: UserToFarm,
});

module.exports = { User, Farm, ProductToFarm, Product, Investment, InvestmentForFarm, UserToFarm };