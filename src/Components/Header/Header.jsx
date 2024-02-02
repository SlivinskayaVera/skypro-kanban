import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../pages/appRoutes";
import {
  StyledHeader,
  HeaderBlock,
  HeaderNav,
  PopUserSetName,
  PopUserSetMail,
  PopUserSetTheme,
  HeaderPopUserSet,
  HeaderBtnMainNew,
  HeaderUser,
  ExitBtn,
  HeaderLogo,
} from "./Header.styled";
import { Container } from "../Common/Common.styled";
import { UserHook } from "../../hooks/useUserHook";
import { ThemeHook } from "../../hooks/useThemeHook";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserHook();

  function openMenu() {
    setIsOpen((previous) => !previous);
  }

  const getUser = JSON.parse(user);

  const { setChangeTheme, changeTheme } = ThemeHook();

  function handleChangeTheme() {
    setChangeTheme((previous) => !previous);
  }

  return (
    <StyledHeader $changeTheme={changeTheme}>
      <Container>
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <Link to={AppRoutes.HOME}>
              <img
                src={changeTheme ? "/images/logo_dark.png" : "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <Link to={AppRoutes.NEW_CARD}>Создать новую задачу</Link>
            </HeaderBtnMainNew>
            <HeaderUser $changeTheme={changeTheme} onClick={openMenu}>
              {getUser.name}
            </HeaderUser>
            {isOpen && (
              <HeaderPopUserSet $changeTheme={changeTheme} id="user-set-target">
                <PopUserSetName $changeTheme={changeTheme}>
                  {getUser.name}
                </PopUserSetName>
                <PopUserSetMail>{getUser.login}</PopUserSetMail>
                <PopUserSetTheme $changeTheme={changeTheme}>
                  <p>Темная тема</p>
                  <input
                    onChange={handleChangeTheme}
                    type="checkbox"
                    name="checkbox"
                    checked={changeTheme}
                  />
                </PopUserSetTheme>
                <ExitBtn $changeTheme={changeTheme} type="button">
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </ExitBtn>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
