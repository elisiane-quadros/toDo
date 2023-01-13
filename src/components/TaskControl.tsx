import styles from "./TaskControl.module.css";

interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

interface TaskControlProps {
  task: ITask[];
}
export function TaskControl({ task }: TaskControlProps) {
  const countFinished = task.filter((t: ITask) => {
    return t.finished;
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Tarefas Criadas <span>{task.length}</span>
        </p>
        <p className={styles.text}>
          Concluídas <span>{`${countFinished.length} de ${task.length}`}</span>
        </p>
      </div>
    </div>
  );
}
