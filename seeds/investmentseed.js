const Investments = require('../models/Investment');

const investmentData = [
    {
        user_id: '1',
        farm_id: '1',
        investment_amount: 3.99,
    }
]
 const seedDatabase = () => Investments.bulkCreate(investmentData);

 module.exports = seedDatabase();