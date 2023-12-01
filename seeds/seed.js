const sequelize = require('../config/connection')
const { User, Farm } = require('../models')

const userData = require('./userData')
const farmData = require('./farmData')
const productToFarmSeed = require('./productToFarm-seeds')
const productSeed = require('./product-seeds')


const seedDatabase = async () => {
    await sequelize.sync({ force:true });

    const users = await User.bulkcreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const farm of farmData) {
        await Farm.create({
            ...farm,
            user_id: users[Math.floor(Math.random()* users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase()