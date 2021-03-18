'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paintings extends Model {
    static associate(models) {
    }
  };
  Paintings.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    size: DataTypes.STRING,
    pic1: DataTypes.STRING,
    pic2: DataTypes.STRING,
    pic3: DataTypes.STRING,
    pic4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paintings',
  });
  return Paintings;
};