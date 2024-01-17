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

export default function PopExit({ exit }) {
  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <HeaderMedium>Выйти из аккаунта?</HeaderMedium>
          </PopExitTtl>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes onClick={exit} id="exitYes">
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
