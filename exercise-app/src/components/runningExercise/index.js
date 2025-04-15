import React, { useState } from 'react';

function runningExercise({ name }) {
    // Set useState
    const [count, setCount] = useState(0);

    // Add by 1
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Reset to 0
    const handleReset = () => {
        setCount(0);
    };

    // Display this to screen
    return (
        <div class="repetition">
            <h2>{name}</h2>
            <div>Count: {count}</div>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default runningExercise;