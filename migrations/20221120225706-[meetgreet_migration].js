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
    await queryInterface.createTable('meet_greet',{
    meet_greet_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    meet_end_time: {
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
    await queryInterface.dropTable('meet_greet')
  }
};
