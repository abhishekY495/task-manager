import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import checkIcon from "../assets/check.png";
import unCheckIcon from "../assets/un-check.png";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import { TaskContext } from "../contexts/TaskContext";
import { EditTaskModal } from "./EditTaskModal";

export const Task = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const { dispatch } = useContext(TaskContext);

  const editBtnHandler = (task) => {
    setShowEditTaskModal(true);
    setTaskToEdit(task);
  };
  const deleteBtnHandler = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
    toast.success("Task Deleted");
  };
  const toggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  return (
    <>
      {showEditTaskModal && (
        <EditTaskModal
          showEditTaskModal={showEditTaskModal}
          setShowEditTaskModal={setShowEditTaskModal}
          taskToEdit={taskToEdit}
        />
      )}
      <div
        className={`${
          task?.isCompleted
            ? "bg-neutral-800 opacity-70"
            : "bg-neutral-700 hover:bg-neutral-700/90"
        } flex items-center justify-between px-5 py-4 rounded hover:cursor-pointer`}
      >
        <div className="flex items-center" onClick={() => toggleTask(task?.id)}>
          {task?.isCompleted ? (
            <img
              src={checkIcon}
              alt="check"
              className="w-6 max-[860px]:w-5 mr-2 object-cover hover:cursor-pointer -mb-1"
            />
          ) : (
            <img
              src={unCheckIcon}
              alt="unCheck"
              className="w-6 max-[860px]:w-5 mr-2 object-cover hover:cursor-pointer -mb-1"
            />
          )}
          <div
            className={`${
              task?.isCompleted && "line-through text-neutral-400"
            } text-2xl max-[860px]:text-xl flex`}
          >
            <p>{task?.taskName}&nbsp;</p>
            <p className="opacity-50">{task?.priority === "high" && "🔴"}</p>
            <p className="opacity-50">{task?.priority === "medium" && "🟠"}</p>
            <p className="opacity-50">{task?.priority === "low" && "🟡"}</p>
          </div>
        </div>
        <div className="flex">
          <img
            src={editIcon}
            alt="edit"
            onClick={() => editBtnHandler(task)}
            className="w-6 max-[860px]:w-5 mr-2 object-cover hover:scale-[1.08] hover:cursor-pointer"
            title="edit"
          />
          <img
            src={deleteIcon}
            alt="delete"
            onClick={() => deleteBtnHandler(task?.id)}
            className="w-6 max-[860px]:w-5 mr-2 object-cover hover:scale-[1.08] hover:cursor-pointer"
            title="delete"
          />
        </div>
      </div>
    </>
  );
};
