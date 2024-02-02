import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export function ThemeHook() {
  return useContext(ThemeContext);
}