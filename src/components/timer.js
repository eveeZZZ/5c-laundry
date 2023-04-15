import { useState, useEffect } from "react";
import Navbar from "./navbar"

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(30 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <Navbar />
      <div>
        <h1>Load in Machine ## in Lyon</h1>
        <p>Time remaining: {minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
      </div>

      {/* Creating 5 buttons */}
      <button>HMC</button>
      <button>POMONA</button>
      <button>CMC</button>
      <button>PITZER</button>
      <button>SCRIPPS</button>
    </div>
  );
};

export default Timer;
