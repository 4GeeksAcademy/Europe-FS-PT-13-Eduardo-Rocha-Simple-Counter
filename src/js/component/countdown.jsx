import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  

  function toggle() {
    setIsActive(!isActive);
  };

  function reset() {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let time = null;
    if (isActive) {
      time = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(time);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
    <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
    </button>
    <button className="button" onClick={reset}>
          Reset
    </button>
    <button className="time bg-dark text-white mx-auto">
        {seconds}
    </button>
    </>
  );
};

export default Countdown;