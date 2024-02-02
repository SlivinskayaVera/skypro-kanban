import { ThemeHook } from "../../hooks/useThemeHook";
import { Wrapper } from "./Wrapper.styled";
export default function PageWrapper({ children }) {
  const { changeTheme } = ThemeHook();

  return (
    <Wrapper $changeTheme={changeTheme}>
      {/* pop-up start */}
      {children}
      {/* pop-up end*/}
    </Wrapper>
  );
}
