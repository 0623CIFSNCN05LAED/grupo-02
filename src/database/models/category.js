module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Category",
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "category",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.Products,{
            as: 'products',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  
  