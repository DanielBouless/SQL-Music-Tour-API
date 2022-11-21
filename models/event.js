const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class Event extends Model{
    static associate({ Stage, StageEvent, MeetGreet }) {
      // define association here
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: StageEvent,
      })
      //Meet and greets
      Event.hasMany(MeetGreet, {
        foreignKey: "event_id",
        as: "meet_greets"
      })

      // set times 
      Event.hasMany(SetTime, {
        foreignKey: "event_id",
        as: "set_times"
      })
    }
}

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
    modelName: 'Event',
    tableName: 'events'
}
)




module.exports = Event