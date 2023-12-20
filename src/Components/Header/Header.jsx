import { useState } from "react";
export default function Header({ addCard }) {

const [isOpen, setIsOpen] = useState(false);

function openMenu () {
  setIsOpen(!isOpen)
}

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
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
          <nav className="header__nav">
            <button
              onClick={addCard}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              {/* <a href="#popNewCard">Создать новую задачу</a> */}
              Создать новую задачу
            </button>
            <a onClick={openMenu} href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            {isOpen && (<div 
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>)}
          </nav>
        </div>
      </div>
    </header>
  );
}