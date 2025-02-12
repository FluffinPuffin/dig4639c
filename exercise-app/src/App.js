import Duration from "./components/DurationExercise";
import Repetition from "./components/RepetitionExercise";
import './App.css';
import React, { useState } from 'react';

// data
let exerciseData = [
  {
    name: "Pushups",
    type: "Repetition",
  },
  {
    name: "Plank",
    type: "Duration",
  },
  {
    name: "Squats",
    type: "Repetition",
  },
  {
    name: "Running",
    type: "Duration",
  }
];

function App() {
  // choice checker
  const [selectedExercise, setSelectedExercise] = useState(null);

  // get exercise
  const button = (exercise) => {
    setSelectedExercise(exercise);
  };

  // if null, dont go anywhere else go somewhere
  let content;
  if (selectedExercise == null) {
    content = exerciseData.map((exercise, index) => (
      <button key={index} onClick={() => button(exercise)}>
        {exercise.name}
      </button>
    ));
  } else {
    // go different places depending on exercise type
    if (selectedExercise.type == "Duration") {
      content = <Duration name={selectedExercise.name} />;
    } else if (selectedExercise.type == "Repetition") {
      content = <Repetition name={selectedExercise.name} />;
    }
  }

  // display to screen
  return (
    <div className="App">
      <h1>Do Some Exercise</h1>
      {content}
    </div>
  );
}

export default App;