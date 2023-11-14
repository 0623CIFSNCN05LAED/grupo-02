'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Sales.hasOne(models.products,{
            as: 'products',
            foreignKey: 'id'
        })
        Sales.hasOne(models.users, {
            as: 'users',
            foreignKey: 'id'
        })
    }
  }
  Sales.init({
    id: DataTypes.INTEGER,
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sales',
  });
  return Sales;
};