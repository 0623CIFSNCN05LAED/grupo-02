module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Roles",
      {
        name: DataTypes.STRING,
      },
      {
        tableName: "roles",
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    );
    return Model;
  };
  