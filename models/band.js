
// Pull Sequelize, DataTypes, and Model from sequlize
// create a sequelize session from the URI in the env
const { Sequelize, DataTypes, Model } = require("sequlize");


// Create a class called Band using the base class 'Model"
class Band extends Model{ 
  static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
      //Set times
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "set_times"
      })
    }
}


//See below comments for how/whats going on broski

  Band.init({
    band_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre:{
      type: DataTypes.TEXT,
      allowNull: false,
      },
    available_start_time:{
      type: DataTypes.DATE,
      allowNull: false,
      },
    end_start_time:{
      type: DataTypes.DATE,
      allowNull: false,
      },
  },
    {
      Sequelize,
      band: 'Band',
      bands: 'band',
      timestamps: false,
    })

/* Below is how to create columns in the database
  it starts with the init method which accpets column configurations.
  Second part creates an instance of the column configurations and relates it to the associated Model and Table
class ClassName extends Model{}
ClassName.init({
  //column configuration go here
  column_name: DataTypes.TEXT,
  column_name_two: {
      type: DataTypes.String,
      allowNull: false
      primaryKey: true            <_PRIMARY KEY ONLY
      autoIncremenet: true,       <_PRIMARY KEY ONLY
  }
}, {
  //extra options go here
  sequelize,
  modelName: 'ModelName',
  tableName: 'table_name',
  timestamps: false
})
*/







module.exports = Band