import { useContext, useEffect } from "react";

import { taskData } from "./data/data";
import { TaskList } from "./components/TaskList";
import { TaskContext } from "./contexts/TaskContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { dispatch } = useContext(TaskContext);

  useEffect(() => {
    const getLocalTaskData = () => {
      const localData = JSON.parse(localStorage.getItem("taskData"));
      if (!localData) {
        localStorage.setItem("taskData", JSON.stringify(taskData));
      }
      const localTaskData = JSON.parse(localStorage.getItem("taskData"));
      return localTaskData;
    };
    const localTaskData = getLocalTaskData();
    dispatch({ type: "SET_LOCAL_TASK_DATA", payload: localTaskData });
  }, []);

  return (
    <div className="mb-36">
      <Toaster position="top-right" />
      <h1 className="text-5xl font-bold text-center my-5">Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
