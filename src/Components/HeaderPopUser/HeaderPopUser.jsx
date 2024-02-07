import { Link } from "react-router-dom";
import {
  ExitBtn,
  HeaderPopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
} from "./HeaderPopUser.styled";
import { ThemeHook } from "../../hooks/useThemeHook";
import { AppRoutes } from "../../pages/appRoutes";

export function HeaderPopUser({ login, name }) {
  const { setChangeTheme, changeTheme } = ThemeHook();

  function handleChangeTheme() {
    setChangeTheme((previous) => !previous);
  }
  return (
    <HeaderPopUserSet $changeTheme={changeTheme}>
      <PopUserSetName $changeTheme={changeTheme}>{name}</PopUserSetName>
      <PopUserSetMail>{login}</PopUserSetMail>
      <PopUserSetTheme $changeTheme={changeTheme}>
        <p>Темная тема</p>
        <input
          onChange={handleChangeTheme}
          type="checkbox"
          name="checkbox"
          checked={changeTheme}
        />
      </PopUserSetTheme>
      <ExitBtn $changeTheme={changeTheme}>
        <Link to={AppRoutes.EXIT}>Выйти</Link>
      </ExitBtn>
    </HeaderPopUserSet>
  );
}
