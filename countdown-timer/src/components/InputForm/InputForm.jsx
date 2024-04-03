import Styles from "./InputForm.css";

const InputForm = () => {

    return (
      <div className={Styles.InputForm} >
        <input type="datetime-local" />
      </div>
    );
}

export default InputForm;