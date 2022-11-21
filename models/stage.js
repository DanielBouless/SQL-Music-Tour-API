// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Stage extends Model{
    static associate({ Event, StageEvent }) {
      // define association here
      Stage.belongsToMany(Event,{
        foreignKey: "stage_id",
        as: "events",
        through: StageEvents,
      })

      Stage.hasMany(SetTimes, {
        foreignKey: "stage_id",
        as: "set_times"
      })
      
    }
}

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
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
}) 

// EXPORT
module.exports = Stage