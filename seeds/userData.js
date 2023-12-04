const Users = require('../models/User.js');

const userData = [
    {
       name: 'John',
       email: 'john@example.com',
       password: 'password12345'
    }
]

const seedDatabase = () => Users.buklkCreate(userData);

module.exports = seedDatabase();