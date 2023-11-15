module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Category",
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncremental: true
        },
        category_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        product_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      },
      {
        tableName: "category",
      }
    );
    Model.associate = function(models){
        Model.hasMany(models.products,{
            as: 'products',
            foreignKey: 'id'
        })
    }
    return Model;
  };
  