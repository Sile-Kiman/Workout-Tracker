let db = require("../models");

module.exports = app => {
  app.get("/api/workouts", (req, res) => {
    db.workout.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  }); 

app.post("/api/workouts", (req, res) => {
  db.workout.create(req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
});

app.get("/api/workouts/range", (req, res) => {
  db.workout.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
});

app.put("/api/workouts/:id", (req, res) => {
  db.workout.findByIdAndUpdate(req.params.id, { 
      $push: {exercises: req.body}
  })
  .then(result => res.json(result))
  .catch(err => res.json(err))
});
}
