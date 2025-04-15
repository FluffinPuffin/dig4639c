import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    // useStates
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // timer that I dont understand but thank god for youtube
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    // start timer
    const start = () => {
        setIsActive(true);
    };

    // stop timer
    const stop = () => {
        setIsActive(false);
    }

    // reset timer
    const reset = () => {
        setIsActive(false);
        setTimer(0);
    };

    // make time look good
    const formatTime = (seconds) => {
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    // what is on the screen
    return (
        <div className="duration">
            <h2>{name}</h2>

            <div className="timer">
                <div className="time-display">{formatTime(timer)}</div>
            </div>

            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default DurationExercise;
