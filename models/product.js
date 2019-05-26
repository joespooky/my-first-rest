'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  product.associate = function(models) {
      product.belongsTo(models.location)
  };
  return product;
};
