import styles from "./TaskDeleteConfirm.module.css";
import { Modal } from "@mui/material";

interface TaskDeleteConfirmProps {
  openConfirmDelete: boolean;
  setOpenConfirmDelete: (openConfirmDelete: boolean) => void;
  onDeleteTask: (id: string) => void;
  id: string;
}

export default function TaskDeleteConfirm({
  openConfirmDelete,
  setOpenConfirmDelete,
  onDeleteTask,
  id,
}: TaskDeleteConfirmProps) {
  const handleClose = () => {
    setOpenConfirmDelete(false);
  };
  const handleDelete = () => {
    onDeleteTask(id);
    setOpenConfirmDelete(false);
  };

  return (
    <Modal
      open={openConfirmDelete}
      onClose={handleClose}
      className={styles.dialogRoot}
    >
      <div className={styles.dialogContent}>
        <h2 className={styles.dialogContentText}>
          Tem certeza que deseja excluir a tarefa?
        </h2>
        <div className={styles.containerButtons}>
          <button className={styles.buttons} onClick={handleClose}>
            Cancelar
          </button>
          <button className={styles.buttons} onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </div>
    </Modal>
  );
}
