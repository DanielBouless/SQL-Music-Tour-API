//DEPENDENCIES
const bands = require("express").Router();
const db = require("../models");
const { Band } = db;
const { Op } = require("sequelize");

//ROUTES

//SHOW all bands
bands.get("/", async (req, res) => {
  try {
    const foundBands = await Band.findAll({
      order: [["start_time", "ASC"]],
      where: {
        band_name: {
          [Op.like]: `%${req.query.band_name ? req.query.band_name : ""}%`,
        },
      },
    });
    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json(error);
  }
});

//SHOW specific band
bands.get("/:band_name", async (req, res) => {
  try {
    const foundBand = await Band.findOne({
      where: { band_name: req.params.band_name },
    });
    res.status(200).json(foundBand);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE a band
bands.post("/", async (req, res) => {
  try {
    const newBand = await Band.create(req.body);
    res.status(200).json({
      message: "Successfully added a new band",
      data: newBand,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE a band
bands.put("/:id", async (req, res) => {
  try {
    const selectedBand = await Band.update(req.body, {
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Succesfully updated band by the band_id of ${selectedBand}`,
      data: selectedBand,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
bands.delete("/:id", async (req, res) => {
  try {
    const deletedBand = await Band.destroy({
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted the band by the id of ${deletedBand}`,
      data: deletedBand,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//EXPORT
module.exports = bands;