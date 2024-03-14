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
import { UserHook } from "../../hooks/useUserHook";
import { ThemeHook } from "../../hooks/useThemeHook";

export default function PopExit() {
  const { setUser } = UserHook();
  const { changeTheme } = ThemeHook();

  function handleExitClick() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock $changeTheme={changeTheme}>
          <PopExitTtl>
            <HeaderMedium $changeTheme={changeTheme}>Выйти из аккаунта?</HeaderMedium>
          </PopExitTtl>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes
                onClick={(e) => {
                  e.preventDefault();
                  handleExitClick();
                }}
                id="exitYes"
              >
                <Link to={AppRoutes.SIGNIN}>Да, выйти</Link>
              </PopExitExitYes>
              <PopExitExitNo $changeTheme={changeTheme} id="exitNo">
                <Link to={AppRoutes.HOME}>Нет, остаться</Link>
              </PopExitExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}
