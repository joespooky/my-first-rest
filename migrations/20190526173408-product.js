'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('products', 'location_id', {
     	type: Sequelize.INTEGER,
	references: {
	  model: 'locations',
	  key: 'id'
	},
	after: 'quantity'
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('products', 'location_id');
  }
};
