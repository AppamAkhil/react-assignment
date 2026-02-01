import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(() =>
    Number(localStorage.getItem("time")) || 10
  );
  const [status, setStatus] = useState(
    localStorage.getItem("status") || "Idle"
  );
  const intervalRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("time", time);
    localStorage.setItem("status", status);
  }, [time, status]);

  const start = () => {
    if (intervalRef.current) return;
    setStatus("Running");
    intervalRef.current = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setStatus("Completed");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus("Paused");
  };

  const resume = start;

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(10);
    setStatus("Idle");
  };

  return (
    <div className="section">
      <h2>Timer</h2>
      <p>{time}s</p>
      <p>Status: {status}</p>

      {status !== "Completed" && <button onClick={start}>Start</button>}
      <button onClick={pause} disabled={status !== "Running"}>
        Pause
      </button>
      <button onClick={resume} disabled={status !== "Paused"}>
        Resume
      </button>
      <button onClick={reset}>Reset</button>

      {status === "Completed" && <h3>Time’s up!</h3>}
    </div>
  );
}
