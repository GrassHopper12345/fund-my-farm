// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Investment extends Model { }

// Investment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "user",
//                 key: "id",
//             },
//         },
//         farm_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "farm",
//                 key: "id",
//             },
//         },
//         product_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         investment_amount: {
//             type: DataTypes.FLOAT,
//             allowNull: false,
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: "investment",
//     }
// );
// module.exports = Investment;
