import Card from "./Card";
import User from "./User";
import classes from './UserList.module.css';

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <User
            className={classes.users}
            key={user.id}
            username={user.username}
            age={user.age}
          />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;