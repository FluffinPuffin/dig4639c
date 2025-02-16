import Duration from "./components/DurationExercise";
import Repetition from "./components/RepetitionExercise";
import './App.css';
import React, { useState } from 'react';

// data
let exerciseData = [
  {
    name: "Pushups",
    type: "Repetition",
    description: "20 Reps - 2 Sets",
  },
  {
    name: "Runs",
    type: "Duration",
    description: "30 mins",
  },
  {
    name: "Squats",
    type: "Repetition",
    description: "20 Reps - 2 Sets",
  },

];

function App() {
  // choice checker
  const [selectedExercise, setSelectedExercise] = useState(null);

  // get exercise
  const button = (exercise) => {
    setSelectedExercise(exercise);
  };

  // if null, dont go anywhere else go based on exercise type
  let content;
  if (selectedExercise == null) {
    content = (
      <div className="main-page-buttons">
        <h1>Do Some Exercise</h1>
        <h3>Recommended Exercises</h3>
        {exerciseData.map((exercise, index) => (
          <button key={index} onClick={() => button(exercise)}>
            <div>{exercise.name}</div>
            <div>{exercise.description}</div>
          </button>
        ))}
      </div>
    );
  } else {
    // go different places depending on exercise type
    if (selectedExercise.type === "Duration") {
      content = <Duration name={selectedExercise.name} />;
    } else if (selectedExercise.type === "Repetition") {
      content = <Repetition name={selectedExercise.name} />;
    }
  }

  // display to screen
  return (
    <div>
      {content}
    </div>
  );
}

export default App;