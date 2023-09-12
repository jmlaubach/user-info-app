import Button from '../components/Button';
import Card from '../components/Card';
import classes from './InvalidInputModal.module.css';

function InvalidInputModal(props) {
  const clickHandler = () => {
    props.cancelInvalidModal();
  }

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={classes.content}>
          <p>Please enter a valid name and age (non-empty name and age greater than 0)</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default InvalidInputModal;