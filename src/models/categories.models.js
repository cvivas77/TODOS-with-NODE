const db = require('../utils/database');
const {DataTypes} = require('sequelize');


const Categories = db.define('categories', {
  id: {primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allownull: false, unique: true},
  name: {type: DataTypes.STRING,
        unique: true,
        allownull: false}
}, 
{
  timestamps: false,
});

module.exports = Categories;