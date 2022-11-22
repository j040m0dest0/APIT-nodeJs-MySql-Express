'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
        await queryInterface.createTable('categoria', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
          },
          nomecategoria: {
            type: Sequelize.TEXT
          },
          id_usuario: {
            type: Sequelize.INTEGER,
          },
          nomeurl: {
            type: Sequelize.TEXT
          },
          created_at: {
            type: Sequelize.DATE
          },
          updated_at:{
            type: Sequelize.DATE
          }
      }   
    )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
