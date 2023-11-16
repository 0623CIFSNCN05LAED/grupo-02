module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Roles",
      {
        role_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        user_id: DataTypes.STRING,
      },
      {
        tableName: "roles",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.Users,{
            as: 'users',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  