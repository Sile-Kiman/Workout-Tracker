const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: [{
    name:{
        type: String,
        trim: true,
        required: "Name is Required"
      },

      type: {
        type: String,
        trim: true,
        required: "Name is Required"
      }, 
      distance:{
        type: Number,
        trim: true,
         
      }, 
      weight: {
        type: Number,
        trim: true,
        required: "weight is Required"
      }, 
      sets: {
        type: Number,
        trim: true,
        
      },
      reps: {
        type: Number,
        trim: true, 
      } , 
  }]
 
  
},
{
  toJSON: {
    //Virtual function
    virtuals: true,
  }
 
}

);

WorkoutSchema.virtual("totalDuration").get(function (){
  //reduce the array of exercises
  return this.exercise.reduce((total,  exercise) =>{
     return total + exercise.duration;
  }, 0);

});

const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;
