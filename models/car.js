const { DataTypes } = require("sequelize");
const db = require("../db/db.js");

const car = db.define("cars", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  bloco: {
    type: DataTypes.STRING,
    required: true,
  },
  cor: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = car;
