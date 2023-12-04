const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class InvestmentForFarm extends Model { }

InvestmentForFarm.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        farm_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "farm",
                key: "id",
            },
        },
        investment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "investment",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "investmenttofarm",
    }
);
module.export = InvestmentForFarm;