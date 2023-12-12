const User = require('./User');
const Farm = require('./Farm');
// const ProductToFarm = require('./ProductToFarm');
const Product = require('./Product');
// const Investment = require('./Investment');
// const InvestmentForFarm = require('./InvestmentForFarm');


User.hasOne(Farm, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Farm.belongsTo(User, {
    foreignKey: 'user_id',
});

Farm.hasOne(Product, {
    foreignKey: 'farm_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(Farm, {
    foreignKey: 'farm_id',
});

// Investment.belongsToMany(Farm, {
//     foreignKey: 'investment_id',
//     through: InvestmentForFarm
// });

// User.belongsToMany(Investment, {
//     foreignKey: 'user_id',
//     through: InvestmentForFarm
// });

// Farm.belongsToMany(Investment, {
//     foreignKey: 'farm_id',
//     through: InvestmentForFarm,
// });

module.exports = { User, Farm, Product };