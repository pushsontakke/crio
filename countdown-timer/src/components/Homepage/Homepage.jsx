import CountdownTimer from "../CountdownTimer/CountdownTimer";
import InputForm from "../InputForm/InputForm";
import Styles from "./Homepage.css";

const Homepage = () => {

    return (
      <div className={Styles.Homepage}>
        <h1 className="header">Countdown Timer</h1>
        <InputForm />
        <CountdownTimer />
      </div>
    );
}

export default Homepage;