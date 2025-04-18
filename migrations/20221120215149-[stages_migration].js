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
    await queryInterface.createTable('stages', {
      stage_id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    genre:{
      type: Sequelize.TEXT,
      allowNull: false,
      },
    available_start_time:{
      type: Sequelize.DATE,
      allowNull: false,
      },
    end_start_time:{
      type: Sequelize.DATE,
      allowNull: false,
      },
  },)

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('stages')
  }
};
