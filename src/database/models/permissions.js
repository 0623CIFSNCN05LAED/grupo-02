module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Permissions",
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncremental: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        role_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      },
      {
        tableName: "permissions",
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.roles,{
            as: 'roles',
            foreignKey: 'role_id'
        })
    }
    return Model;
  };
  