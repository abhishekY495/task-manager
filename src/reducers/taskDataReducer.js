export const initState = {
  taskData: [],
  filterBy: "all",
};

export const taskDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCAL_TASK_DATA": {
      const localTaskData = action.payload;
      return {
        ...state,
        taskData: localTaskData,
      };
    }
    case "ADD_TASK": {
      const newTask = action.payload;
      const newTaskData = [newTask, ...state.taskData];
      localStorage.setItem("taskData", JSON.stringify(newTaskData));
      return {
        ...state,
        taskData: newTaskData,
      };
    }
    case "DELETE_TASK": {
      const taskId = action.payload;
      const newTaskData = state.taskData.filter((task) => task?.id !== taskId);
      localStorage.setItem("taskData", JSON.stringify(newTaskData));
      return {
        ...state,
        taskData: newTaskData,
      };
    }
    case "TOGGLE_TASK": {
      const taskId = action.payload;
      const newTaskData = state.taskData.map((task) =>
        task?.id === taskId
          ? { ...task, isCompleted: !task?.isCompleted }
          : task
      );
      localStorage.setItem("taskData", JSON.stringify(newTaskData));
      return {
        ...state,
        taskData: newTaskData,
      };
    }
    case "CLEAR_COMPLETED_TASK": {
      const newTaskData = state.taskData.filter((task) => !task?.isCompleted);
      localStorage.setItem("taskData", JSON.stringify(newTaskData));
      return {
        ...state,
        taskData: newTaskData,
      };
    }
    case "UPDATE_TASK_DETAILS": {
      const updatedTask = action.payload;
      const newTaskData = state.taskData.map((task) =>
        task?.id === updatedTask?.id ? { ...updatedTask } : task
      );
      localStorage.setItem("taskData", JSON.stringify(newTaskData));
      return {
        ...state,
        taskData: newTaskData,
      };
    }
    case "UPDATE_FILTER_BY": {
      const filterBy = action.payload;
      return {
        ...state,
        filterBy,
      };
    }
  }
};
