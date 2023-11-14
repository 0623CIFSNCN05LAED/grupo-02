'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Roles.hasMany(models.users, {
            as: 'users',
            foreignKey: 'role_id'
        })
    }
  }
  Roles.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'roles',
  });
  return Roles;
};