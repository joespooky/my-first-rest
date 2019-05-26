'use strict';
module.exports = (sequelize, DataTypes) => {
  const transfer = sequelize.define('transfer', {
    product: DataTypes.INTEGER,
    src_loc: DataTypes.INTEGER,
    dst_loc: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  transfer.associate = function(models) {
    // associations can be defined here
  };
  return transfer;
};