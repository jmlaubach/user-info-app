import React from "react";
import { useState } from "react";
import InvalidInputModal from "./modals/InvalidInputModal";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const DUMMY_USERS = [];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (enteredUser) => {
    const userData = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    setUsers(prevUsers => {
      return [enteredUser, ...prevUsers];
    });
  };

  return (
    <div>
      <UserForm onSaveUserInfo={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
