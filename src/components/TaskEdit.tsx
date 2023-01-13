import { Modal } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./TaskEdit.module.css";

interface TaskEditContentProps {
  openEditTask: boolean;
  setOpenEditTask: (openEditTask: boolean) => void;
  onEditTask: (id: string, content: string) => void;
  content: string;
  id: string;
}
export default function TaskEditContent({
  openEditTask,
  setOpenEditTask,
  onEditTask,
  content,
  id,
}: TaskEditContentProps) {
  const [taskDescription, setTaskDescription] = useState(content);

  useEffect(() => {
    if (openEditTask) {
      setTaskDescription(content);
    } else {
      setTaskDescription("");
    }
  }, [openEditTask]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setTaskDescription(event.target.value);
  };

  const handleClose = () => {
    setOpenEditTask(false);
  };

  const handleEditTask = () => {
    onEditTask(id, taskDescription);
    setOpenEditTask(false);
  };

  return (
    <Modal
      className={styles.modalArea}
      open={openEditTask}
      onClose={handleClose}
    >
      <form onSubmit={handleEditTask} className={styles.container}>
        <header className={styles.titleModal}>
          <span>Editar</span>
          <span className={styles.titleTask}>Tarefa</span>{" "}
        </header>
        <div className={styles.containerBody}>
          <input
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={taskDescription}
            onChange={handleInputValue}
          />
          <div className={styles.containerButtons}>
            <button onClick={handleClose}>Cancelar</button>
            <button type="submit" disabled={taskDescription === ""}>
              Salvar Alteração
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
