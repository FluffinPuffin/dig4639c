import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    // useStates
    const [setCount, setSetCount] = useState(0);
    const [repCount, setRepCount] = useState(0);

    // increase set
    const increaseSetCount = () => {
        setSetCount(setCount + 1);
    };

    // decrease set
    const decreaseSetCount = () => {
        if (setCount > 0) {
            setSetCount(setCount - 1);
        }
    };

    // increase rep
    const increaseRepCount = () => {
        setRepCount(repCount + 1);
    };

    // decrease rep
    const decreaseRepCount = () => {
        if (repCount > 0) {
            setRepCount(repCount - 1);
        }
    };

    // what is on the screen
    return (
        <div className="repetition">
            <h2>{name}</h2>
            <div className="count-container">
                <div className="count">
                    <span>Sets: {setCount}</span>
                </div>
                <div className="count">
                    <span>Reps: {repCount}</span>
                </div>
            </div>
            <div className="buttons">
                <button onClick={increaseSetCount}>^</button>
                <button onClick={increaseRepCount}>^</button>
            </div>
            <div className="buttons">
                <button onClick={decreaseSetCount}>v</button>
                <button onClick={decreaseRepCount}>v</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;
