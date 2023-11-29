import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import closeIcon from "../assets/close.png";
import { TaskContext } from "../contexts/TaskContext";

export const AddTaskModal = ({ showAddTaskModal, setShowAddTaskModal }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const { dispatch } = useContext(TaskContext);

  const reset = () => {
    setTaskName("");
    setPriority("");
  };

  const closeModal = () => {
    setShowAddTaskModal(false);
    reset();
  };

  const addTaskBtnHandler = () => {
    if (taskName.trim().length === 0) {
      toast.error("Task Name cannot be empty");
    } else if (priority.trim().length === 0) {
      toast.error("Priority cannot be empty");
    } else {
      const newTask = {
        id: uuidv4(),
        taskName,
        isCompleted: false,
        priority,
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
      toast.success("Task Added");
      closeModal();
    }
  };

  if (showAddTaskModal) {
    return (
      <div
        className="w-screen h-screen bg-neutral-500/50 backdrop-blur-[2px] fixed top-0 right-0 z-10"
        onClick={closeModal}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[350px] m-auto bg-neutral-800 flex flex-col gap-3 mt-[86px] p-5 relative rounded-md"
        >
          <img
            src={closeIcon}
            alt="close"
            className="absolute right-6 w-6 bg-neutral-500 rounded-full p-1 hover:cursor-pointer hover:bg-neutral-400 transition-all"
            onClick={closeModal}
          />
          <p className="text-5xl border-b-2 pb-1 border-neutral-500">
            Add Task
          </p>
          <label>
            <p className="text-2xl mb-[2px]">Task Name</p>
            <input
              type="text"
              className="text-black w-full text-lg pl-2"
              onChange={(e) => setTaskName(e.target.value)}
            />
          </label>
          <label>
            <p className="text-2xl mb-[2px]">Priority</p>
            <select
              className="text-black w-full text-lg pl-2"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <button
            className="bg-blue-600 text-xl pb-1 rounded-md border-2 mt-2 border-blue-500 hover:bg-blue-700"
            onClick={addTaskBtnHandler}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
};
