import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: "", age: "" });
  const [flag, setFlag] = useState(false);
  const [errorModal, setErrorModal] = useState({ title: "", message: "" });
  function handleChange(e) {
    setUserInput((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }
  function changeButtonState() {
    setFlag(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (userInput.username.trim() === 0 || userInput.age.trim() === 0) {
      setFlag(true);
      setErrorModal({
        title: "missing fields",
        message: "please enter both username and age",
      });
      return;
    }
    if (+userInput.age < 1) {
      setFlag(true);
      setErrorModal({
        title: "Age should be more than zero",
        message: "Age can't be lesser than one",
      });
      return;
    }
    props.onAddUser(userInput);
    setUserInput({ username: "", age: "" });
  }

  return (
    <div>
      {flag && (
        <ErrorModal btnState={changeButtonState} errorhandle={errorModal} />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usename</label>
          <input
            id="username"
            name="username"
            onChange={handleChange}
            value={userInput.username}
            type="text"
          ></input>

          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            value={userInput.age}
            onChange={handleChange}
            type="number"
          ></input>

          <Button type="Submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
