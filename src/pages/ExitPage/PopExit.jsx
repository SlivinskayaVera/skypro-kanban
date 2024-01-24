import { useContext } from "react";
import { AppRoutes } from "../appRoutes";
import {
  HeaderMedium,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitFormGroup,
  StyledPopExit,
  PopExitForm,
  PopExitExitYes,
  PopExitExitNo,
} from "./PopExit.styled";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export default function PopExit() {
  const { setIsAuth } = useContext(UserContext);

  function handlerExit() {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");
    localStorage.removeItem("user");
    setIsAuth(false);
  }

  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <HeaderMedium>Выйти из аккаунта?</HeaderMedium>
          </PopExitTtl>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes
                onClick={(e) => {
                  e.preventDefault();
                  handlerExit();
                }}
                id="exitYes"
              >
                <Link to={AppRoutes.SIGNIN}>Да, выйти</Link>
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <Link to={AppRoutes.HOME}>Нет, остаться</Link>
              </PopExitExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}
