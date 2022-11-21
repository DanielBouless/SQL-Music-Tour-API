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
    await queryInterface.createTable('set_time',{
      set_time_id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    stage_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('set_time')
  }
};
