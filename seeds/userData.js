const User = require('../models/User.js');

const userData = [
    {
        name: 'John',
        email: 'john@example.com',
        password: 'password12345',
    },
    {
        name: 'bob',
        email: 'bob@example.com',
        password: 'password12345',
    },
    {
        name: 'Jane',
        email: 'jane@example.com',
        password: 'password12345',
    },
    {
        name: 'Johnny',
        email: 'johnny@example.com',
        password: 'password12345',
    },
    {
        name: 'Jo',
        email: 'jo@example.com',
        password: 'password12345',
    },
    {
        name: 'ohn',
        email: 'ohn@example.com',
        password: 'password12345',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;