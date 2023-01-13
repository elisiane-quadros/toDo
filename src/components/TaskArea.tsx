import styles from "./TaskArea.module.css";
import clipboard from "../assets/img/Clipboard.png";
import { CheckCircle, Circle, PencilLine, Trash } from "phosphor-react";
import { useState } from "react";
import TaskDeleteConfirm from "./TaskDeleteConfirm";
import TaskEditContent from "./TaskEdit";

interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

interface TaskAreaProps {
  task: ITask[];
  setTask: (task: any) => void;
}

export function TaskArea({ task, setTask }: TaskAreaProps) {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  function handleFinished(id: string) {
    const taskTemp = task.map((t: ITask) => {
      if (t.id === id) {
        return {
          id: t.id,
          content: t.content,
          finished: !t.finished,
        };
      } else {
        return t;
      }
    });
    setTask(taskTemp);
  }

  const handleOpenEditTask = (id: string, content: string) => {
    setOpenEditTask(true);
    setCurrentId(id);
    setCurrentContent(content);
  };

  function handleEditTaskContent(id: string, content: string) {
    const editedTask = task.map((t: ITask) => {
      if (t.id === id) {
        return {
          id: t.id,
          content: content,
          finished: t.finished,
        };
      } else {
        return t;
      }
    });
    setTask(editedTask);
  }

  const handleConfirmDelete = (id: string) => {
    setOpenConfirmDelete(true);
    setCurrentId(id);
  };
  function handleDeleteTask(id: string) {
    const newTask = task.filter((ts) => {
      return ts.id !== id;
    });
    setTask(newTask);
  }

  return task.length ? (
    <div>
      {task.map((t: ITask) => {
        return (
          <div key={t.id} className={styles.container}>
            <div className={styles.newTaskBox}>
              <div className={styles.checkAndDescription}>
                <button
                  className={styles.checkButton}
                  onClick={() => handleFinished(t.id)}
                >
                  {t.finished ? (
                    <CheckCircle size={24} color="#5a60cd" />
                  ) : (
                    <Circle size={24} color="#5a60cd" />
                  )}
                </button>
                <p>{t.content}</p>
              </div>
              <div className={styles.iconButtons}>
                <button
                  className={styles.editButton}
                  onClick={() => handleOpenEditTask(t.id, t.content)}
                >
                  <PencilLine size={24} />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleConfirmDelete(t.id)}
                >
                  <Trash size={24} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <TaskEditContent
        openEditTask={openEditTask}
        setOpenEditTask={setOpenEditTask}
        onEditTask={handleEditTaskContent}
        content={currentContent}
        id={currentId}
      />
      <TaskDeleteConfirm
        openConfirmDelete={openConfirmDelete}
        setOpenConfirmDelete={setOpenConfirmDelete}
        onDeleteTask={handleDeleteTask}
        id={currentId}
      />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.taskArea}>
        <img src={clipboard} alt="prancheta" />
        <strong>Voce ainda não tem tarefas cadastradas</strong>
        <p>Crie e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
