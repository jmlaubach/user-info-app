import classes from './InvalidInputModal.module.css';

function InvalidInputModal(props) {
  const clickHandler = () => {
    props.cancelInvalidModal();
  }

  return (
    <div className={classes.overlay}>
      <div>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
      </div>
      <div className={classes.paragraph}>Please enter a valid name and age (non-empty name and age greater than 0)</div>
      <div className={classes.actions}>
        <button onClick={clickHandler}>Cancel</button>
      </div>
    </div>
  );
}

export default InvalidInputModal;