import { useState, useEffect } from 'react';
import TimerActions from './TimerActions';
import * as PropTypes from "prop-types";

export default function TimerBody({ activeTab }) {
    const initialTime = 5 * 60 * 1000; // 5 min in milliseconds
    const [time, setTime] = useState(initialTime);
    const [running, setRunning] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const [inputHours, setInputHours] = useState('');
    const [inputMinutes, setInputMinutes] = useState('');
    const [inputSeconds, setInputSeconds] = useState('');

    const [pausedTime, setPausedTime] = useState(null); 

    useEffect(() => {
        let interval;
        if (running && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1000);
            }, 1000);
        } else if (!running || time <= 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running, time]);


    const startTimer = () => {
        const hoursInSeconds = parseInt(inputHours || 0) * 3600;
        const minutesInSeconds = parseInt(inputMinutes || 0) * 60;
        const seconds = parseInt(inputSeconds || 0);
        const totalTime = (hoursInSeconds + minutesInSeconds + seconds) * 1000;
        const actualTime = totalTime > 0 ? totalTime : initialTime; 
    
        let startTime = actualTime;
    
        if (pausedTime !== null) {
            startTime = pausedTime;
            setPausedTime(null); 
        }
    
        setTime(startTime);
        setRunning(true);
        setEditMode(false);
    };
    
    const handleStop = () => {
        setRunning(false);
        setPausedTime(time); 
    };

    const handleReset = () => {
        const hoursInSeconds = parseInt(inputHours || 0) * 3600;
        const minutesInSeconds = parseInt(inputMinutes || 0) * 60;
        const seconds = parseInt(inputSeconds || 0);
        const totalTime = (hoursInSeconds + minutesInSeconds + seconds) * 1000;
        const resetTime = totalTime > 0 ? totalTime : initialTime;
    
        setTime(resetTime);
        setRunning(false);
        setEditMode(false);
        setPausedTime(null); 
    };

    const handleTimeClick = () => {
        setEditMode(true);
    };
    const handleInputClick = () => {
        setEditMode(true); 
        setRunning(false); 
    };
    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (inputHours !== '' || inputMinutes !== '' || inputSeconds !== '') {
                startTimer();
            } else {
                alert("Please fill at least one input field before starting the timer");
            }
        }
    };

    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    const progressPercentage = ((initialTime - time) / initialTime) * 100;

  return (
        <div className={activeTab === 'timer' ? 'visible' : 'hidden'}>
            {editMode ? (
                <div className='flex mt-10 mb-9 mx-5 px-3 cursor-pointer border-b-2 border-[#4285f4] w-[400px] max-h-[85px] font-normal'>
                     <input
                        type="text"
                        value={inputHours}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,2}$/.test(value) || value === '') {
                                setInputHours(value);
                            }
                        }}
                        placeholder="00h"
                        onClick={handleInputClick}
                        onKeyDown={handleInputKeyPress}
                        className='placeholder-[#dadce0] max-w-[130px] text-[4rem] outline-none'
                    />
                    <input
                        type="text"
                        value={inputMinutes}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,2}$/.test(value) || value === '') {
                                setInputMinutes(value);
                            }
                        }}
                        placeholder="00m"
                        onClick={handleInputClick}
                        onKeyDown={handleInputKeyPress}
                        className='placeholder-[#dadce0] max-w-[140px] text-[4rem] outline-none'
                    />
                    <input
                        type="text"
                        value={inputSeconds}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d{0,2}$/.test(value) || value === '') {
                                setInputSeconds(value);
                            }
                        }}
                        placeholder="00s"
                        onClick={handleInputClick}
                        onKeyDown={handleInputKeyPress}
                        className='placeholder-[#dadce0] max-w-[130px] text-[4rem] outline-none'
                    />
                </div>
            ) : (
                <div className="timer-display py-8 px-7 cursor-pointer relative" onClick={handleTimeClick}>
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
                    {hours > 0 && (
                        <>
                        <span style={{ fontSize: '4rem' }}>{hours}</span>
                        <span style={{ fontSize: '40px' }}>h </span>
                        </>
                    )}  
                    <span style={{ fontSize: '4rem' }}>{minutes}</span>
                    <span style={{ fontSize: '40px' }}>m </span>
                    <span style={{ fontSize: '4rem' }}> {("0" + seconds).slice(-2)}</span>
                    <span style={{ fontSize: '40px' }}>s </span>
            </div>
            )}
            <TimerActions
                running={running}
                onStart={startTimer} 
                onStop={handleStop}
                onReset={handleReset}
            />
        </div>
    );
}

TimerBody.propTypes = {
    activeTab: PropTypes.string, 
  };