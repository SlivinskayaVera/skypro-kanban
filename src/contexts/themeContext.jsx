import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ChangeThemeProvider({ children }) {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ changeTheme, setChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
