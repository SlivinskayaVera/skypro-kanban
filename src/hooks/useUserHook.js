import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export function UserHook() {
  return useContext(UserContext);
}
