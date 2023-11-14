'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Users.hasOne(models.role, {
            as: 'roles',
            foreignKey: 'id'
        })
    }
  }
  Users.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    image: DataTypes.BLOB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};