import React, { useContext } from "react";

import { TaskContext } from "../contexts/TaskContext";
import { FiltersBar } from "./FiltersBar";
import { Task } from "./Task";
import { ButtonsBar } from "./ButtonsBar";

export const TaskList = () => {
  const {
    state: { taskData, filterBy },
  } = useContext(TaskContext);

  const tasks = taskData.filter((task) => {
    if (filterBy === "all") {
      return task;
    } else if (filterBy === "not done") {
      return !task?.isCompleted;
    } else if (filterBy === "done") {
      return task?.isCompleted;
    } else {
      return task?.priority === filterBy;
    }
  });

  return (
    <>
      <div className="flex flex-col w-[800px] m-auto gap-2 max-[860px]:w-[550px] max-[550px]:w-full max-[550px]:px-4">
        <ButtonsBar />
        <FiltersBar />
        {tasks.map((task) => {
          return <Task task={task} key={task?.id} />;
        })}
        {tasks.length === 0 && taskData.length !== 0 && (
          <p className={`text-center mt-5 text-2xl font-semibold`}>
            Nothing to Show 🤷
          </p>
        )}
        {taskData.length === 0 && (
          <p className="text-center mt-5 text-2xl font-semibold">
            No Tasks, Enjoy 🥳🥳
          </p>
        )}
      </div>
    </>
  );
};
