module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Products",
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        image: DataTypes.BLOB,
        stock: DataTypes.INTEGER,
        
      },
      {
        tableName: "products",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    Model.associate = function(models){
        Model.hasOne(models.Category,{
            as: 'category',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  