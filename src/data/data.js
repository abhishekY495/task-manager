import { v4 as uuidv4 } from "uuid";

export const taskData = [
  {
    id: uuidv4(),
    taskName: "Buy groceries",
    isCompleted: true,
    priority: "high",
  },
  {
    id: uuidv4(),
    taskName: "Clean the house",
    isCompleted: true,
    priority: "high",
  },
  {
    id: uuidv4(),
    taskName: "Read a book",
    isCompleted: false,
    priority: "low",
  },
  {
    id: uuidv4(),
    taskName: "Exercise for 30 minutes",
    isCompleted: true,
    priority: "medium",
  },
  {
    id: uuidv4(),
    taskName: "Doctors Appointment",
    isCompleted: false,
    priority: "high",
  },
  {
    id: uuidv4(),
    taskName: "Finish presentation",
    isCompleted: false,
    priority: "low",
  },
];
