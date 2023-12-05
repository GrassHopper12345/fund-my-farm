const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserToFarm extends Model { }

UserToFarm.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        farm_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'farm',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "farm",
      }
);
module.export = UserToFarm;