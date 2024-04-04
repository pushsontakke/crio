import { useState } from "react";
import Styles from "./InputForm.css";

const InputForm = ({ onDateSelect, onCancel, isCountDownActive }) => {
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelect(dateTime);
  };

  return (
    <div className={Styles.InputForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
        {!isCountDownActive && <button type="submit">Start Timer</button>}
        {isCountDownActive && (
          <button type="button" onClick={onCancel}>
            Cancel Timer
          </button>
        )}
      </form>
    </div>
  );
};

export default InputForm;
