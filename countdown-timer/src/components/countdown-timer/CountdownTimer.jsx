import  "./CountdownTimer.css";

const CountdownTimer = ({ countdownDateTime }) => {
  return (
    <>
      {!(countdownDateTime.message.length > 0) ? (
        <div>
          <div className="countdownWrapper">
            <div className="countdownBox">
              {countdownDateTime.days}
              <span className="legend">Days</span>
            </div>
            <div className="countdownBox">
              {countdownDateTime.hours}
              <span className="legend">Hours</span>
            </div>
            <div className="countdownBox">
              {countdownDateTime.minutes}
              <span className="legend">Minutes</span>
            </div>
            <div className="countdownBox">
              {countdownDateTime.seconds}
              <span className="legend">Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="highlight">
          {countdownDateTime.message}
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
