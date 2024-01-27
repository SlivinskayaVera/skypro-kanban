import { useState } from "react";
import { createContext } from "react";

const TasksContext = createContext(null);
function TasksProvider({children}) {
  const [cards, setCards] = useState(null);

  return (
    <TasksContext.Provider value={{ cards, setCards }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };