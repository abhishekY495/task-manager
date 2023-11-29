import { createContext, useReducer } from "react";

import { initState, taskDataReducer } from "../reducers/taskDataReducer";

export const TaskContext = createContext();
export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskDataReducer, initState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
