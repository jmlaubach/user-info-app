import { useState } from "react";
import classes from './UserForm.module.css';

function UserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: +enteredAge,
    };

    if (userData.username === "" || userData.age <= 0) {
      props.onInvalidData();
    } else {
      props.onSaveUserInfo(userData);
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label>Username</label>
            <input
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label>Age</label>
            <input type="number" value={enteredAge} onChange={ageChangeHandler} />
          </p>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
