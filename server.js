// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))





// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})


//bands_controller gives us access to bands router aka band db data
//APP.USE makes it so that any time the url has the endpoint '/bands' we get access to band
const bands_controller = require('./controllers/bands_controller')
app.use('/bands', bands_controller)

const events_controller = require('./controllers/events_controller')
app.use('/events', events_controller)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})


/**Don't forget to configure sequel by entering the following in terminal:
                sequelize init:config
 
//Next, we have to utilize this database config file. 
Essentially, the config will replace the Postgres connection string, and the model index will replace the need to create a Sequelize instance within each model. 
Before we clean up things we no longer need, let's generate the model index so we can see what exactly it will do.
///Generate the model index
In terminal, again making sure you are at the root of the project, run the following command:
                    sequelize init:models

Typically, that command would generate a models folder along with the index file. However, because we already have the folder, it will simply create the index within the already existing folder. 
Open up that file in your code editor.
There is a lot of code in that file, but as you can see here, it utilizes the config file we just generated to create a new Sequelize instance.



                        sequelize init:migrations

                        sequelize model:generate --name ModelName --attributes "user_id:integer, name:string, columnName:text, columnName:date, columnName:date" --force true



                        /**
 * 
 * migrations/[date]-create-band.js
Note: The beginning of your migration file name will differ based on the date and time it was created.

We should see a module export with two attributes, an up and down.
up: The function that will run when applying the migration.
down: The function that will run when reverting the migration.
We want to apply the migration, so we will focus on the up. 
The code itself is fairly self-explanatory, we can see the migration is saying to createTable called Bands, with all the listed attributes and datatypes.
Unfortunately, because we had to manually make some edits to our model, we can see that some of the migration does not match what we need. 
We will need to go through and manually edit this migration as well before we can apply it.
On our model, we specified the table name should be lowercase and plural. On the migration, we should change the 'Bands' argument in createTable and dropTable to 'bands' to match.
On our model, we set the model to not have timestamps. On the migration, we need to remove the createdAt and updatedAt attributes as those are the timestamps.
On our model, we specified band_id as our primary key. On the migration, we need to rename the id attribute to band_id. 
We can then delete the other band_id attribute underneath that is not set to primary key.
On our model, we specified allowNull as false for each attribute. On the migration, we have to do the same.
What your code should look like:

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bands', {
        band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bands')
  }
}

DONT FORGET TO CHANGE THE TABLE NAME TO LOWERCASE IN UP/DOWN AND LOOK AT THE ID NAME

This now might seem like it takes more time than writing a model from scratch. While that could be true in some cases like ours, the benefits of migrations outweigh the little extra time. Recall that they are not only helpful in keeping track of database changes, but allow us to make changes to tables without dropping the entire database. We will cover this in more depth in a future lesson.

Running the Migration
With our model and migration completely set up, we can finally run the migration.

In terminal, run the command: sequelize db:migrate

 */

                        
