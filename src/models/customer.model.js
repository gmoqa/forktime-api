const Sequelize = require('sequelize');

const Customer = sequelize.define('customer', {
    id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    lastName: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    email: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    dni: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: true },
});

module.exports = Customer;
