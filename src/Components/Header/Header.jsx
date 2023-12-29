import { useState } from "react";
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
            <a href="" target="_self">
              <img src="./public/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="./public/images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <HeaderNav>
            <HeaderBtnMainNew onClick={addCard} id="btnMainNew">
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser onClick={openMenu}>Ivan Ivanov</HeaderUser>
            {isOpen && (
              <HeaderPopUserSet id="user-set-target">
                {/* <a href="">x</a> */}
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </HeaderPopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
