import { useState, useEffect } from 'react';
import TimerActions from './TimerActions';
import * as PropTypes from "prop-types";

export default function StopwatchBody({ activeTab }) {
    const [time, setTime] = useState (0)
    const [running, setRunning] = useState (false)

    useEffect(() => {
        let interval;
        if(running) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10)
          }, 10);
        } else if (!running) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [running])

      let minutes = Math.floor((time / 60000) % 60);
      let seconds = Math.floor((time / 1000) % 60);
      let milliseconds = ("0" + ((time / 10) % 100)).slice(-2);

    // Add leading zero if seconds < 10 and there are minutes
    if (seconds < 10 && minutes > 0) {
        seconds = "0" + seconds;
    }

    const handleStart = () => {
        setRunning(true);
    };

    const handleReset = () => {
        setTime(0);
        setRunning(false);
    };

    const handleStop = () => {
        setRunning(false);
      };

    const handleTimeClick = () => {
        setRunning(!running); 
    };

      return (
        <div className={activeTab === 'stopwatch' ? 'visible' : 'hidden'}>
            <div className="stopwatch-display mt-9 mb-7 mx-5 px-3 cursor-pointer" onClick={handleTimeClick}>
                {minutes > 0 && (
                    <>
                        <span style={{ fontSize: '4rem' }}>{minutes}</span>
                        <span style={{ fontSize: '40px' }}>m </span>
                    </>
                )}
                <span style={{ fontSize: '4rem' }}>{seconds}</span>
                <span style={{ fontSize: '40px' }}>s </span>
                <span style={{ fontSize: '3rem' }}>{milliseconds}</span>
            </div>
            <TimerActions running={running} onStart={handleStart} onStop={handleStop} onReset={handleReset} />
        </div>
    );
}

StopwatchBody.propTypes = {
  activeTab: PropTypes.string, 
};