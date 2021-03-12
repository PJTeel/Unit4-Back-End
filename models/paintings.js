'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paintings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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