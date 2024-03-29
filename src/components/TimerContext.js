// TimerContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timers, setTimers] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimers((prevTimers) =>
          prevTimers.map((timer) => {
            if (timer.isRunning && timer.seconds > 0) {
              return { ...timer, seconds: timer.seconds - 1 };
            } else if (timer.isRunning && timer.seconds === 0) {
              setTimerExpired(true);
              setIsRunning(false);
            }
            return timer;
          })
        );
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, timers]);

  const addTimer = (duration) => {
    setTimers([...timers, { id: Date.now(), duration, seconds: duration, isRunning: false }]);
  };

  const removeTimer = (timerId) => {
    setTimers(timers.filter((timer) => timer.id !== timerId));
  };

  const startTimer = (timerId) => {
    setTimers((prevTimers) =>
  prevTimers.map((timer) => {
    if (timer.isRunning && timer.seconds > 0) {
      return { ...timer, seconds: timer.seconds - 1 };
    } else if (timer.isRunning && timer.seconds === 0) { 
      setTimerExpired(true);
      return { ...timer, isRunning: false }; // Return a new object with updated isRunning
    }
    return timer;
  })
);

    setIsRunning(true);
  };

  const updateTimer = (timerId, seconds) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === timerId ? { ...timer, seconds } : timer
      )
    );
  };

  return (
    <TimerContext.Provider value={{ timers, addTimer, removeTimer, startTimer, updateTimer, timerExpired }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(TimerContext);
};
