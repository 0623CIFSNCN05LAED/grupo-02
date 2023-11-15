module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Products",
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncremental: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        category_id: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        image: DataTypes.BLOB,
        stock: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      },
      {
        tableName: "products",
      }
    );
    Model.associate = function(models){
        Model.hasOne(models.category,{
            as: 'category',
            foreignKey: 'category_id'
        })
    }
    return Model;
  };
  