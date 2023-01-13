import styles from "./InputTask.module.css";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";

interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

interface InputTaskProps {
  setTask: (task: any) => void;
}
export default function InputTask({ setTask }: InputTaskProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskDescription(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask: ITask = {
      id: uuidv4(),
      content: taskDescription,
      finished: false,
    };
    setTask((state: ITask[]) => [...state, newTask]);
    setTaskDescription("");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleNewTask} className={styles.inputArea}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={taskDescription}
          onChange={handleInputValue}
        />
        <button type="submit" disabled={taskDescription === ""}>
          Criar <PlusCircle size={32} />
        </button>
      </form>
    </div>
  );
}
