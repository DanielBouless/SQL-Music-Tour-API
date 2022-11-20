// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Stage extends Model{}

Stage.init({
    stage_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        autoIncrement: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    Sequelize,                           
    modelName: 'stage',
    tableName: 'Stages',
    timestamps: false
}) 

// EXPORT
module.exports = Stage