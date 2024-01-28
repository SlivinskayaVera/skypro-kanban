import { useContext } from "react";
import { TasksContext } from "../contexts/tasksContext";

export function TaskHook() {
  return useContext(TasksContext);
}
