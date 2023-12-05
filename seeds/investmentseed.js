const Investments = require('../models/Investment');

const investmentData = [
    {
        user_id: '1',
        farm_id: '1',
        investment_amount: 3.99,
    }
]
 const seedInvestment = () => Investments.bulkCreate(investmentData);

 module.exports = seedInvestment;