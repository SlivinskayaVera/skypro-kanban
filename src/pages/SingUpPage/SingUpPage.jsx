import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import {
  Wrapper,
  ContainerSignUp,
  Modal,
  ModalBlock,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  ModalBtnSignUpEnt,
  ModalFormGroup,
} from "./singUpPage.styled";
import { useState } from "react";
import { registration } from "../../../api";
import { MessageError } from "../../Components/Common/Common.styled";
import { UserHook } from "../../hooks/useUserHook";

export default function SingUpPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [wrongUserData, setWrongUserData] = useState(null);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    login: "",
    password: "",
  });
  const { setUser } = UserHook();

  const handlerRegistration = async (event) => {
    event.preventDefault();

    try {
      if (!newUser.firstName || !newUser.login || !newUser.password) {
        setErrorMessage(true);
        return;
      }
      const userRegistration = await registration({
        name: newUser.firstName,
        login: newUser.login,
        password: newUser.password,
      });
      await localStorage.setItem("user", JSON.stringify(userRegistration));
      await localStorage.setItem("token", userRegistration.token);

      await setUser(localStorage.user);
      navigate(AppRoutes.HOME);
    } catch (error) {
      setWrongUserData(true);
    } finally {
      setTimeout(() => {
        setWrongUserData(null);
        setErrorMessage(null);
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <ContainerSignUp>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Регистрация</h2>
            </ModalTtl>
            <ModalFormLogin
              onSubmit={handlerRegistration}
              id="formLogUp"
              action="#"
            >
              <ModalInput
                $errorMessage={errorMessage}
                $wrongUserData={wrongUserData}
                type="text"
                name="firstName"
                id="first-name"
                placeholder="Имя"
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />
              <ModalInput
                $errorMessage={errorMessage}
                $wrongUserData={wrongUserData}
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                onChange={(e) =>
                  setNewUser({ ...newUser, login: e.target.value })
                }
              />
              <ModalInput
                $errorMessage={errorMessage}
                $wrongUserData={wrongUserData}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
              <MessageError>
                {errorMessage
                  ? "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
                  : ""}
              </MessageError>
              <MessageError>
                {wrongUserData
                  ? "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
                  : ""}
              </MessageError>
              <ModalBtnSignUpEnt
                disabled={errorMessage || wrongUserData}
                $errorMessage={errorMessage}
                $wrongUserData={wrongUserData}
                type="submit"
                id="SignUpEnter"
              >
                Зарегистрироваться
              </ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>Уже есть аккаунт?</p>
                <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
