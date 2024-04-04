import { useState } from "react";
import Styles from "./InputForm.module.css";

const InputForm = ({ onDateSelect, onCancel, isCountdownActive }) => {
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelect(dateTime);
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.formComtainer}>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
        className={Styles.InputField}
      />
      {!isCountdownActive && (
        <button type="submit" className={Styles.button}>
          Start Timer
        </button>
      )}
      {isCountdownActive && (
        <button type="button" onClick={onCancel} className={Styles.button}>
          Cancel Timer
        </button>
      )}
    </form>
  );
};

export default InputForm;
