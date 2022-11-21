//DEPENDENCIES
const stages = require("express").Router();
const db = require("../models");
const { Stage } = db;
const { Op } = require("sequelize");

//ROUTES

//SHOW all bands
stages.get("/", async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      order: [["start_time", "ASC"]],
      where: {
        name: {
          [Op.like]: `%${req.query.name ? req.query.name : ""}%`,
        },
      },
    });
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SHOW specific band
stages.get("/:name", async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
       where: { stage_name: req.params.name },
            include:{ 
                model: Event, 
                as: "events",
                through: { attributes: [] }
            },
            order: [
                [{ model: Event, as: "events" }, 'date', 'ASC'],
            ]
    });
    res.status(200).json(foundStage);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE a band
stages.post("/", async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.status(200).json({
      message: "Successfully added a new event",
      data: newStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE a band
stages.put("/:id", async (req, res) => {
  try {
    const selectedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Succesfully updated band by the band_id`,
      data: selectedStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
stages.delete("/:id", async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted the band by the id of ${deletedStage}`,
      data: deletedStage,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = stages;