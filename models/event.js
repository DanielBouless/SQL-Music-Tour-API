const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Event extends Model{}

Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    event_name:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    Sequelize,
    modelName: 'event',
    tableName: 'events'
}
)




module.exports = Event