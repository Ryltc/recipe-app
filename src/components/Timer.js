import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const updateTimer = () => {
    setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));

    if (seconds === 59) {
      setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));

      if (minutes === 59) {
        setHours((prevHours) => prevHours + 1);
      }
    }
  };

  return (
    <View>
      <Text>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Text>
      <Button title="Start" onPress={startTimer} />
      <Button title="Stop" onPress={stopTimer} />
      <Button title="Reset" onPress={resetTimer} />
    </View>
  );
};

export default Timer;
