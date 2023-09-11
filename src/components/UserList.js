import User from "./User";
import classes from './UserList.module.css';

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((user) => (
        <User
          key={user.id}
          username={user.username}
          age={user.age}
        />
      ))}
    </ul>
  );
}

export default UserList;