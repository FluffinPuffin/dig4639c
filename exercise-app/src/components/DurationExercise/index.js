import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    // Set timer
    const [timer, setTimer] = useState(0);
    // Flag to check if timer is active
    const [isActive, setIsActive] = useState(false);

    // use effect
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    // Start timer
    const start = () => {
        setIsActive(true);
    };

    // Reset timer
    const reset = () => {
        setIsActive(false);
        setTimer(0);
    };

    // format the timer
    // found out how to do this via https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9
    const formatTime = (seconds) => {
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    // display to screen
    return (
        <div>
            <h2>{name}</h2>
            <div>Timer: {formatTime(timer)}</div>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default DurationExercise;