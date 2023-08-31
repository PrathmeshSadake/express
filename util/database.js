const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "Prathmesh@04", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
