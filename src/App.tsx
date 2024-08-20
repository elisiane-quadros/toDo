import { Header } from "./components/Header";
import { TaskControl } from "./components/TaskControl";
import { TaskArea } from "./components/TaskArea";

import "./global.css";
import InputTask from "./components/InputTask";

interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

export function App() {
  return (
    <div>
      <Header />
      <InputTask />
      <TaskControl />
      <TaskArea />
    </div>
  );
}

export default App;
