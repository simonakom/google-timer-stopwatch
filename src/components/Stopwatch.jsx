import {useEffect, useState} from "react"

export default function Stopwatch () {
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
  if (minutes > 0 && seconds < 10) {
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

  return (
    <>
    <div className="text-center">   
      <div className="p-10">
        {minutes > 0 ? "" + minutes + "m" + " " : ""}
        {seconds}s&nbsp;
        <span>{milliseconds}</span>
      </div>

      
        <div>
          {running ? (
            <>
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleStop}>
                STOP
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={handleReset}>
                RESTART
              </button>
            </>
          ) : (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={handleStart}>
                START
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={handleReset}>
                RESET
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}