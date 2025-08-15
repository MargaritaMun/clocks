'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Admin}) {
    this.belongsTo(Admin,{foreignKey:'adminId'})
    }
  }
  Clock.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clock',
  });
  return Clock;
};