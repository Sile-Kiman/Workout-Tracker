const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// app.post("/exercise", ({ body }, res) => {

// db.workout.create({ exercise: body })
//   .then(dbworkout => {
//     console.log(dbworkout);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });

  //Port
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
//});
//}//