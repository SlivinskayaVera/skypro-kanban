import { useState } from "react";
import { createContext } from "react";

// это обертка для проекта, содержащая данные
const UserContext = createContext(null);

// для получения этих данных
function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  return (
    <UserContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
