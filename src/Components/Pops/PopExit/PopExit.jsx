import {
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitFormGroup,
  StyledPopExit,
  PopExitForm,
  PopExitExitYes,
  PopExitExitNo,
} from "./PopExit.styled";

export default function PopExit() {
  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitExitYes>
              <PopExitExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}
