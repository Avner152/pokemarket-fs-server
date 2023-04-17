module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prizes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Products;
};
