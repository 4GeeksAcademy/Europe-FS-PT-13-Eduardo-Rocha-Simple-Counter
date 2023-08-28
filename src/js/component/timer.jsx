import React from "react";
import { useState } from "react";

let Timer = () => {
    const [seconds, setSeconds] = useState(0)

    const stopTimer = () => {

    }

    const resetTimer = () => {

    }

    const currentCount = seconds

    return (
        <div className="counter-container">
            <button className="stop-button" onClick={stopTimer}>stop</button>
            <button className="reset-button" onClick={resetTimer}>reset</button>
        </div>
    )
};

export default Timer;