'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
              },
              fname: {
                type: Sequelize.STRING,
              },
              lname: {
                type: Sequelize.STRING,
              },
              email: {
                type: Sequelize.STRING,
              },
              password:{
                type: Sequelize.STRING,
              },
              createdAt: {
                type: Sequelize.DATE,
              },
              updatedAt: {
                type: Sequelize.DATE,
              },
        });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('user');
    }
};
