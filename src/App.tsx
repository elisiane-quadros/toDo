import { Header } from "./components/Header";
import { TaskControl } from "./components/TaskControl";
import { TaskArea } from "./components/TaskArea";

import "./global.css";
import { useState } from "react";
import InputTask from "./components/InputTask";

interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

export function App() {
  const [task, setTask] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <InputTask setTask={setTask} />
      <TaskControl task={task} />
      <TaskArea task={task} setTask={setTask} />
    </div>
  );
}

export default App;
