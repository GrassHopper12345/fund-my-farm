const User = require('./User');
const Farm = require('./Farm');

User.hasMany(Farm, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Farm.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {User, Farm};