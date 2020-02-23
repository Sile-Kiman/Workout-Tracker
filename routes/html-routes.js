// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

   
// exercise route loads exercise.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/exercise.html"));
  });
   
  // stats route loads stats.html
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/stats.html"));
  });

};
