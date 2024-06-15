import React, { useState, useRef } from 'react';
import './MySchedule.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MySchedule() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0); 

  const startTimer = () => {
    if (time <= 0) return;

    if (!isActive) {
      setIsActive(true);
      startTimeRef.current = Date.now() - (progress / 100) * (time * 1000); // Calculate start time offset
    }

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = (elapsed / (time * 1000)) * 100;

      setProgress(newProgress >= 100 ? 100 : newProgress);

      if (newProgress >= 100) {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setTime(0); // Reset input value to 0
        setProgress(0); // Reset progress bar to 0
      }
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setProgress(0);
    setTime(0);
    startTimeRef.current = 0;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="workout-timer-container">
      <div className="workout-timer">
        <h1>Workout Timer</h1>
        <div className="timer-display">{formatTime(time)}</div>
        <div className="timer-controls">
          {!isActive ? (
            <>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(parseInt(e.target.value))}
                placeholder="Set time (in minutes)"
                className="timer-input"
              />
              <button onClick={startTimer} className="timer-button start">
                Start
              </button>
            </>
          ) : (
            <>
              <button onClick={stopTimer} className="timer-button stop">
                Stop
              </button>
              <button onClick={resetTimer} className="timer-button reset">
                Reset
              </button>
            </>
          )}
        </div>
        <div className="progress-bar">
          <CircularProgressbar
            value={progress}
            text={`${Math.floor(progress)}%`}
            styles={buildStyles({
              pathColor: '#f2711c',
              textColor: '#f2711c',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default MySchedule;
