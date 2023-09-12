function User(props) {
  return (
    <li className={props.className}>
      {`${props.username} (${props.age} years old)`}
    </li>
  );
}

export default User;