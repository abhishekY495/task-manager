import React from "react";
import ReactDOM from "react-dom/client";

import { TaskContextProvider } from "./contexts/TaskContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
