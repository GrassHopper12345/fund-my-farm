const Farm = require('../models/Farm.js');

const farmData = [
    {
        farm_name: "Bob's Mules",
        description: "Bob's Mules is a family owned farm for two generations",
    },
    {
        farm_name: "J's Veggies",
        description: "J's Veggies is a all organic non-persticide using farm in the hills.",
    },
    {
        farm_name: "Bubba's Organics",
        description: "Bubba's Organics is a family owned farm for two generations",
    },
    {
        farm_name: "Shoots and Ladders Farms",
        description: "Shoots and Ladders Farms is a all organic non-persticide using farm in the hills.",
    },
    {
        farm_name: "Jolly Farms",
        description: "Jolly Farms is a family owned farm for two generations",
    },
    {
        farm_name: "Tasty Dirt",
        description: "Tasty Dirt is a all organic non-persticide using farm in the hills.",
    },
];

const seedFarms = () => Farm.bulkCreate(farmData);

module.exports = seedFarms;