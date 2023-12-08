const sequelize = require('../config/connection')

const seedUsers = require('./userData');
const seedFarms = require('./farmData');
// const seedProductToFarm = require('./productToFarmSeeds');
const seedProducts = require('./productSeeds');
// const seedInvestment = require('./investmentseed.js');
// const seedInvestmentForFarm = require('./InvestmentForFarmSeed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    console.log('n----- Users Seeded -----/n');

    await seedFarms();
    console.log('n----- Farm Seeded -----/n');

    await seedProducts();
    console.log('n----- Products Seeded -----/n');

    // await seedInvestment();
    // console.log('n----- Investments Seeded -----/n');

    // await seedProductToFarm();
    // console.log('n----- Products To Farms Seeded -----/n');

    // await seedInvestmentForFarm();
    // console.log('n----- Investment To Farm Seeded -----/n');

    process.exit(0);
};

seedDatabase()