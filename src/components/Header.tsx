import styles from "./Header.module.css";
import { ListChecks } from "phosphor-react";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
       
        <ListChecks size={40} />
        <h1>
          <span>to</span>
          <span className={styles.do}>Do</span>
        </h1>
      </div>
    </header>
  );
}
