// import "./../../styles/pomodoro.css";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

const Pomodoro = () => {
  const [inputtimesec, setinputtimesec] = useState(0);
  const [inputtimemin, setinputtimemin] = useState(0);
  const time = new Date();
  const expiryTimestamp = time.setMinutes(time.getMinutes() + 25);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  return (
    <div className=" bg-pomodoro">
      <div className="pomodoro">
        <div className="d-flex gap-2 flex-column">
          <button className="text-pomodoro text-shadow-sm text-2rem">
            Timer
          </button>
        </div>
        <form
          className="d-flex flex-row "
          onSubmit={(e) => {
            e.preventDefault();
            const time = new Date();
            time.setMinutes(time.getMinutes() + inputtimemin * 1);
            time.setSeconds(time.getSeconds() + inputtimesec * 1);
            restart(time);
          }}
        >
          <input
            className="w-4rem"
            type="number"
            min={0}
            // max={60}
            value={inputtimemin}
            onChange={(e) => {
              setinputtimemin(e.target.value);
            }}
            placeholder="Min"
          />
          <input
            className="w-4rem"
            type="number"
            value={inputtimesec}
            min={0}
            max={60}
            onChange={(e) => {
              setinputtimesec(e.target.value);
            }}
            placeholder="Sec"
          />
          <button className="p-1 mx-2 bg-active rounded-1 ">set</button>
          <button
            className="p-1 mx-2 bg-active rounded-1"
            onClick={() => {
              setinputtimemin("");
              setinputtimesec("");
            }}
          >
            Reset
          </button>
        </form>
        <div className="timer-content">
          <button
            className="text-pomodoro time-duration text-shadow-sm text-1rem "
            onClick={() => {
              const time = new Date();
              time.setMinutes(time.getMinutes() + 15);
              restart(time);
            }}
          >
            Short Duration
          </button>
          <button
            className="text-pomodoro time-duration text-shadow-sm text-1rem"
            onClick={() => {
              const time = new Date();
              time.setMinutes(time.getMinutes() + 25);
              restart(time);
            }}
          >
            Long Duration
          </button>
          <button
            className={
              "text-pomodoro pomodoro-time text-shadow-sm text-4rem rounded-4 transition-all " +
              (isRunning ? "color-active" : "bg-accent")
            }
            onClick={() => {
              if (isRunning === true) {
                pause();
              } else {
                resume();
              }
            }}
          >
            {" "}
            {formatTime(minutes + hours * 60)}:{formatTime(seconds)}
          </button>
        </div>
        <button
          className="start text-pomodoro text-shadow-sm transition-all"
          onClick={() => {
            if (isRunning === true) {
              pause();
            } else {
              resume();
            }
          }}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
};
export default Pomodoro;
