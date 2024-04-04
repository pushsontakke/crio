import { useState, useEffect } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import InputForm from "../InputForm/InputForm";
import "./Homepage.css";

const Homepage = () => {
  // const [targetDateTime, setTargetDateTime] = useState("default");
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [countdownDateTime, setCountdownDateTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [intervalId, setIntervalId] = useState(null);

  const startCountdown = (targetDateTime) => {
    clearInterval(intervalId);
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDateTime);

      if (target > now) {
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
          setIsCountdownActive(true);
          setCountdownDateTime({ days, hours, minutes, seconds, message: "" });
        } else {
          setCountdownDateTime({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: "Selected time is more than 100 days",
          });
        }
      } else {
        setIsCountdownActive(false);
        setCountdownDateTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          message:
            "🎉 The countdown is over! What's next on your adventure? 🎉",
        });
        clearInterval(interval);
      }
    }, 1000);
    setIntervalId(interval);
  };

  useEffect(() => {
    //Cleanup on component unmount

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleDateSelect = (date) => {
    startCountdown(date);
  };

  const cancelTimer = () => {
    clearInterval(intervalId);
    setIsCountdownActive(false);
    setCountdownDateTime({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    });
  };

  return (
    <div className="Homepage">
      <h1 className="header">
        Countdown <span className="highlight">Timer</span>
      </h1>
      <InputForm
        onDateSelect={handleDateSelect}
        onCancel={cancelTimer}
        isCountdownActive={isCountdownActive}
      />
      <CountdownTimer countdownDateTime={countdownDateTime} />
    </div>
  );
};

export default Homepage;
