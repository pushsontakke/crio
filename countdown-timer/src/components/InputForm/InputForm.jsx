import { useState } from "react";
import "./InputForm.css";

const InputForm = ({ onDateSelect, onCancel, isCountdownActive }) => {
  const [dateTime, setDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDateSelect(dateTime);
  };

  return (
    <form onSubmit={handleSubmit} className="formComtainer">
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
        className="InputField"
      />
      {!isCountdownActive && (
        <button type="submit" className="button">
          Start Timer
        </button>
      )}
      {isCountdownActive && (
        <button type="button" onClick={onCancel} className="button">
          Cancel Timer
        </button>
      )}
    </form>
  );
};

export default InputForm;
