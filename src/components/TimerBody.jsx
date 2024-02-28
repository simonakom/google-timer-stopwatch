import { useState, useEffect } from 'react';
import TimerActions from './TimerActions';

export default function TimerBody({ activeTab }) {
    const [time, setTime] = useState(300); // 5 minutes in seconds
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running, time]);

    const handleTimeClick = () => {
        setRunning(false); // Stop the timer when time is clicked
    };

    const handleStart = () => {
        setRunning(true);
    };

    const handleReset = () => {
        setTime(300);
        setRunning(false);
    };

    return (
        <div className={activeTab === 'timer' ? 'visible' : 'hidden'}>
            <div className="" onClick={handleTimeClick}>
                {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}
            </div>
            <TimerActions running={running} onStart={handleStart} onStop={() => setRunning(false)} onReset={handleReset} />
        </div>
    );
}