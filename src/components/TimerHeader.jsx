import { useState } from "react"
import Stopwatch from './Stopwatch';
import Timer from './Timer';

export default function TimerHeader() {
    const [display, setDisplay] = useState(true);
  return (
    <>
    <div>
      <div className="flex justify-center text-2xl mt-7 space-x-6">
        <button onClick={() => setDisplay(true)}>Timer</button>
        <button onClick={() => setDisplay(false)}>Stopwatch</button>
      </div>
      {
        display ?
          <div className="timer">
            <Timer />
          </div> :
          <div className="stopwatch">
            <Stopwatch />
          </div>
      }
    </div>
    </>
  );
}
