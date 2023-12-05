const Users = require('../models/User.js');

const userData = [
    {
       name: 'John',
       email: 'john@example.com',
       password: 'password12345'
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;