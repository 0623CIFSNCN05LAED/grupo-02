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
    return Model;
  };
  