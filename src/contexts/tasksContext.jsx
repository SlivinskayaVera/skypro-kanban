import { useState } from "react";
import { createContext } from "react";

// это обертка для проекта, содержащая данные
const TasksContext = createContext(null);

// для получения этих данных
function TasksProvider({children}) {
  const [cards, setCards] = useState({});

  if (!cards) {
    throw new Error("Данные по задачам не были найдены");
  }

  return (
    <TasksContext.Provider value={{ cards, setCards }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };