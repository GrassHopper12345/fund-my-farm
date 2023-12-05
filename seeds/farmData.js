const Farm = require('../models/Farm.js');

const farmData = [
    {
        farm_name: "Bob's Mules",
        description: "Bob's Mules is a family owned farm for two generations",
    },
    {
        farm_name: "J's Veggies",
        description: "J's Veggies is a all organic non-persticide using farm in the hills.",
    }
];

const seedFarms = () => Farm.bulkCreate(farmData);

module.exports = seedFarms;