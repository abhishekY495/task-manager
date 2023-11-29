import React, { useContext, useState } from "react";

import { TaskContext } from "../contexts/TaskContext";

export const FiltersBar = () => {
  const {
    state: { filterBy },
    dispatch,
  } = useContext(TaskContext);
  const [selectedFilter, setSelectedFilter] = useState(filterBy);

  const changeFilter = (filterBy) => {
    setSelectedFilter(filterBy);
    dispatch({ type: "UPDATE_FILTER_BY", payload: filterBy });
  };

  return (
    <div className="flex gap-1 my-1 flex-wrap max-[860px]:justify-center">
      <button
        onClick={() => changeFilter("all")}
        className={`${
          selectedFilter === "all"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        All
      </button>
      <button
        onClick={() => changeFilter("done")}
        className={`${
          selectedFilter === "done"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        Done ✅
      </button>
      <button
        onClick={() => changeFilter("not done")}
        className={`${
          selectedFilter === "not done"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        Not Done ❌
      </button>
      <button
        onClick={() => changeFilter("low")}
        className={`${
          selectedFilter === "low"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        Low 🟡
      </button>
      <button
        onClick={() => changeFilter("medium")}
        className={`${
          selectedFilter === "medium"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        Medium 🟠
      </button>
      <button
        onClick={() => changeFilter("high")}
        className={`${
          selectedFilter === "high"
            ? "opacity-100 scale-100"
            : "opacity-60 scale-[0.9]"
        } bg-neutral-700 border-2 border-neutral-600 max-[420px]:w-[150px] rounded-full px-4 py-1 pb-[6px] hover:bg-neutral-800 transition-all hover:cursor-pointer`}
      >
        High 🔴
      </button>
    </div>
  );
};
