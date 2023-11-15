module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Roles",
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncremental: true
        },
        role_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        user_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      },
      {
        tableName: "roles",
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.users,{
            as: 'users',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  