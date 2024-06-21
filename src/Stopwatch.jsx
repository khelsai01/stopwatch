import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });
  const [running, setRunning] = useState(false);

  const id = useRef();

  const stratTime = () => {
    if (!running) {
      id.current = setInterval(updateTime, 1000);
      setRunning(true);
    }
  };

  const stopTime = () => {
    if (running) {
      clearInterval(id.current);
      setRunning(false);
    }
  };

  const resetTime = () => {
    clearInterval(id.current);
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };

  //   console.log(time.sec);
  const updateTime = () => {
    setTime((prev) => {
      let newTime = { ...prev };

      if (newTime.sec < 59) {
        newTime.sec += 1;
      } else {
        newTime.min += 1;
        newTime.sec = 0;
      }

      if (newTime.min === 60) {
        newTime.hr += 1;
        newTime.min = 0;
      }

      return newTime;
    });
  };
  return (
    <div>
      <div
        style={{
          width: "250px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          backgroundColor: "olive",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h1>Stopwatch</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <h1>{`${time.hr < 10 ? `0${time.hr}` : `${time.hr}`} : ${
            time.min < 10 ? `0${time.min}` : `${time.min}`
          } : ${time.sec < 10 ? `0${time.sec}` : `${time.sec}`}`}</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <button onClick={stratTime}>Start</button>
            <button onClick={stopTime}>Stop</button>
            <button onClick={resetTime}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
