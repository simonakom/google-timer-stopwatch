import { useEffect, useState } from "react";

export default function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    var idhr = null;
    var idmin = null;
    var idsec = null;
    if (timeOn) {
      idsec = setInterval(() => {
        if (sec <= 0) {
          setSec(0);
        } else {
          setSec((prev) => prev - 1);
        }
        if (sec < 0) {
          clearInterval(idsec);
        }
      }, 1000);
      if (sec === 0 && min !== 0) {
        clearInterval(idsec);
        idmin = setInterval(() => {
          setMin((prev) => prev - 1);
          if (min === 0) {
            clearInterval(idmin);
          } else {
            setSec(60);
          }
        }, 1000);
      }
      if (min === 0 && hr !== 0) {
        idhr = setInterval(() => {
          setHr((prev) => prev - 1);
          if (hr === 0) {
            clearInterval(idhr);
          } else {
            setMin(60);
          }
        }, 1000);
      }
      if (hr === 0) {
        clearInterval(idhr);
      }
      if (hr === 0 && min === 0 && sec === 0) {
        clearInterval(idhr);
        clearInterval(idmin);
        clearInterval(idsec);
      }
    } else {
      clearInterval(idsec);
      clearInterval(idmin);
      clearInterval(idhr);
    }

    return () => {
      clearInterval(idsec);
      clearInterval(idmin);
      clearInterval(idhr);
    };
  }, [hr, min, sec, timeOn]);

  const handleStart = () => {
    setTimeOn(true);
  };

  const handleReset = () => {
    setHr(0);
    setMin(0);
    setSec(0);
    setTimeOn(false);
  };

  const handleStop = () => {
    setTimeOn(false);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-6">
        <input
          type="number"
          placeholder="00h"
          onChange={(e) => setHr(parseInt(e.target.value))}
          value={hr}
          className="border-b-2 border-gray-400 text-2xl mx-1 w-[10%]"
        />
        hr :{" "}
        <input
          type="number"
          placeholder="00m"
          onChange={(e) => setMin(parseInt(e.target.value))}
          value={min}
          className="border-b-2 border-gray-400 text-2xl mx-1 w-[10%]"
        />
        min :{" "}
        <input
          type="number"
          placeholder="00s"
          onChange={(e) => setSec(parseInt(e.target.value))}
          value={sec}
          className="border-b-2 border-gray-400 text-2xl mx-1 w-[10%]"
        />
        sec
      </div>
      <div className="flex justify-center">
        <button className="bg-green-400 text-white px-4 py-2 rounded mr-2" onClick={handleStart}>
          START
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleStop}>
          STOP
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}