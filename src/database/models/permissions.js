module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Permissions",
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        role_id: DataTypes.STRING,
      },
      {
        tableName: "permissions",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.Roles,{
            as: 'roles',
            foreignKey: 'role_id'
        })
    }
    return Model;
  };
  