import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ChangeThemeProvider({ children }) {
  if (localStorage.themeAll === undefined) {
    localStorage.themeAll = JSON.stringify({ key: false });
  }

  const [changeTheme, setChangeTheme] = useState(
    JSON.parse(localStorage.themeAll).key
  );

  function handleThemeChange() {
    setChangeTheme((prev) => !prev);
  }

  localStorage.themeAll = JSON.stringify({ key: changeTheme });

  return (
    <ThemeContext.Provider
      value={{ changeTheme, setChangeTheme, handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
