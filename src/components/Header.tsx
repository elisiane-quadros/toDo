import styles from "./Header.module.css";
import toDoLogo from "../assets/img/rocket.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={toDoLogo} alt="rocket" />
        <h1>
          <span>to</span>
          <span className={styles.do}>Do</span>
        </h1>
      </div>
    </header>
  );
}
