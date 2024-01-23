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

export default function SingUpPage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [wrongUserData, setWrongUserData] = useState(null);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    firstName: "",
    login: "",
    password: "",
  });

  const handlerRegistration = async (event) => {
    event.preventDefault();

    try {
      if (!newUser.firstName || !newUser.login || !newUser.password) {
        setErrorMessage(true);
        return;
      }
      const tokenRegistration = await registration({
        name: newUser.firstName,
        login: newUser.login,
        password: newUser.password,
      });
      localStorage.token = tokenRegistration;
      navigate(AppRoutes.SIGNIN);
    } catch (error) {
      setWrongUserData(true);
    } finally {
      setTimeout(() => setWrongUserData(null), 3000);
      setTimeout(() => setErrorMessage(null), 3000);
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
                className="first-name"
                type="text"
                name="firstName"
                id="first-name"
                placeholder="Имя"
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />
              <ModalInput
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                onChange={(e) =>
                  setNewUser({ ...newUser, login: e.target.value })
                }
              />
              <ModalInput
                className="password-first"
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
                {/* to={AppRoutes.HOME} */}
                {/* <Link type="submit">Зарегистрироваться</Link> */}
              </ModalBtnSignUpEnt>
              <ModalFormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignUp>
    </Wrapper>
  );
}
