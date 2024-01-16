// TimerContext.js
import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([]);

  const addTimer = (duration) => {
    setTimers([...timers, { id: Date.now(), duration, seconds: duration, isRunning: false }]);
  };

  const removeTimer = (timerId) => {
    setTimers(timers.filter((timer) => timer.id !== timerId));
  };

  const updateTimer = (timerId, seconds) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === timerId ? { ...timer, seconds } : timer
      )
    );
  };

  const startTimer = (timerId) => {
    updateTimer(timerId, timers.find((timer) => timer.id === timerId).seconds);
  };

  return (
    <TimerContext.Provider value={{ timers, addTimer, removeTimer, startTimer, updateTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
