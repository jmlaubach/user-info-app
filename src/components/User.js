import classes from './User.module.css';

function User(props) {
  return (
    <li className={classes['user-background']}>
      <div>
        <div className={classes['user-item']}>
          {`${props.username} (${props.age} years old)`}
        </div>
      </div>
    </li>
  );
}

export default User;