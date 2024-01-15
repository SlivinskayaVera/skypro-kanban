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
} from "./Header.styled";
import { Container } from "../Common/Common.styled";

export default function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen((previous) => !previous);
  }

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
            <HeaderBtnMainNew $sizes="md" onClick={addCard} id="btnMainNew">
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser onClick={openMenu}>Ivan Ivanov</HeaderUser>
            {isOpen && (
              <HeaderPopUserSet id="user-set-target">
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <button type="button" className="_hover03">
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </button>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
