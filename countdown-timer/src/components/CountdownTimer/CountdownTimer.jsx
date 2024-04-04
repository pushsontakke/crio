import Styles from "./CountdownTimer.css";

const CountdownTimer = ({ countdownDateTime }) => {
  return (
    <>
      {!(countdownDateTime.message.length > 0) ? (
        <div>
          <div className={Styles.countdownWrapper}>
            <div className={Styles.countdownBox}>
              {countdownDateTime.days}
              <span className={Styles.legend}>Days</span>
            </div>
            <div className={Styles.countdownBox}>
              {countdownDateTime.hours}
              <span className={Styles.legend}>Hours</span>
            </div>
            <div className={Styles.countdownBox}>
              {countdownDateTime.minutes}
              <span className={Styles.legend}>Minutes</span>
            </div>
            <div className={Styles.countdownBox}>
              {countdownDateTime.seconds}
              <span className={Styles.legend}>Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={Styles.highlight}>
          {countdownDateTime.message}
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
