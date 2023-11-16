module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Users",
      {
        name: DataTypes.STRING,
        user: DataTypes.STRING,
        email: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        password: DataTypes.STRING,
        adress: DataTypes.STRING,
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        image: DataTypes.BLOB,
      },
      {
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasOne(models.Roles,{
            as: 'roles',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  