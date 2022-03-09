import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  function handlebutton() {
    props.btnState();
  }
  return (
    <>
      <div className={styles.backdrop} onClick={handlebutton}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.errorhandle.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorhandle.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={handlebutton}>Ok</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
