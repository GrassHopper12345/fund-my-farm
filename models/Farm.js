const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Farm extends Model { }

Farm.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    farm_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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

module.exports = Farm;
