'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    name: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE
  }, {
    underscored: true,
  });
  location.associate = function(models) {
    location.hasMany(models.product)
  };
  return location;
};
