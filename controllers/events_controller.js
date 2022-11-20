//DEPENDENCIES
const events = require("express").Router();
const db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");

//ROUTES

//SHOW all bands
events.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [["start_time", "ASC"]],
      where: {
        event_name: {
          [Op.like]: `%${req.query.event_name ? req.query.event_name : ""}%`,
        },
      },
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SHOW specific band
events.get("/:event_name", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_name: req.params.event_name },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE a band
events.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(200).json({
      message: "Successfully added a new event",
      data: newEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE a band
events.put("/:id", async (req, res) => {
  try {
    const selectedEvent = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Succesfully updated band by the band_id of ${selectedEvent}`,
      data: selectedEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
events.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted the band by the id of ${deletedEvent}`,
      data: deletedEvent,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = events;