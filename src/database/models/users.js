module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Users",
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncremental: true
        },
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
      },
      {
        tableName: "users",
      }
    );
    Model.associate = function(models){
        Model.hasOne(models.roles,{
            as: 'roles',
            foreignKey: 'role_id'
        })
    }
    return Model;
  };
  