const Sequelize = require('sequelize');

const Transaction = sequelize.define('transaction', {
    id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
    createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: true }
});

module.exports = Transaction;
