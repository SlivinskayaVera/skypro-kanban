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
} from "./Header.styled";
import { Container } from "../Common/Common.styled";
import { UserHook } from "../../hooks/useUserHook";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserHook();

  function openMenu() {
    setIsOpen((previous) => !previous);
  }

  const getUser = JSON.parse(user);

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <div className="header__logo _show _light">
            <Link to={AppRoutes.HOME} target="_self">
              <img src="./public/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="header__logo _dark">
            <Link to={AppRoutes.HOME} target="_self">
              <img src="./public/images/logo_dark.png" alt="logo" />
            </Link>
          </div>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <Link to={AppRoutes.NEW_CARD}>Создать новую задачу</Link>
            </HeaderBtnMainNew>
            <HeaderUser onClick={openMenu}>{getUser.name}</HeaderUser>
            {isOpen && (
              <HeaderPopUserSet id="user-set-target">
                <PopUserSetName>{getUser.name}</PopUserSetName>
                <PopUserSetMail>{getUser.login}</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <ExitBtn type="button">
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
