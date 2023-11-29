import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import { AddTaskModal } from "./AddTaskModal";
import { TaskContext } from "../contexts/TaskContext";

export const ButtonsBar = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const { dispatch } = useContext(TaskContext);

  const clearCompletedTasks = () => {
    dispatch({ type: "CLEAR_COMPLETED_TASK" });
    toast.success("Cleared Completed tasks");
  };

  return (
    <>
      <AddTaskModal
        showAddTaskModal={showAddTaskModal}
        setShowAddTaskModal={setShowAddTaskModal}
      />
      <div className="flex justify-center items-center gap-3 max-[450px]:flex-wrap">
        <button
          className="bg-blue-700 font-bold text-2xl py-1 px-3 rounded-md border-2 border-blue-500 hover:bg-blue-600 w-full max-[860px]:py-1 max-[550px]:text-xl"
          onClick={() => setShowAddTaskModal(true)}
        >
          Add
        </button>
        <button
          className="bg-blue-700 font-bold text-2xl py-1 px-3 rounded-md border-2 border-blue-500 hover:bg-blue-600 w-full max-[860px]:py-1 max-[550px]:text-xl"
          onClick={clearCompletedTasks}
        >
          Clear Completed
        </button>
      </div>
    </>
  );
};
