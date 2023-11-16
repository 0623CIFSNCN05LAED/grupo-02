module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Sales",
      {
        user_id: DataTypes.INTEGER,
      },
      {
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasOne(models.Users,{
            as: 'users',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  