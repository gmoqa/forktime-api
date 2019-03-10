const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    lastName: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    email: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    password: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    dni: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    created: { type: Sequelize.DATE, allowNull: false, defaultValue: true }
});

module.exports = User;
