 let mongoose = require("mongoose");
 let db = require("../models");

module.exports = app => {
 
  app.get("/api/workouts", (req, res) => {
    db.workout.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
      console.log("database data" , result)
    });
  }); 
 
}
