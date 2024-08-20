import { useSelector } from "react-redux";
import { RootState, ITask } from "../../store/store";
import styles from "./TaskControl.module.css";

export function TaskControl() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const countFinished = tasks.filter((t: ITask) => {
    return t.finished;
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Tarefas Criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.text}>
          Concluídas <span>{`${countFinished.length} de ${tasks.length}`}</span>
        </p>
      </div>
    </div>
  );
}
