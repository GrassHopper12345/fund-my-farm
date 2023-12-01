const sequelize = require('../config/connection')
const { User, Farm } = require('../models')

const userData = require('./userData.json')
const farmData = require('./farmData.json')

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