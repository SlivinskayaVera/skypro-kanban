import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../appRoutes";
import {
  Wrapper,
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalFormLogin,
  ModalInput,
  ModalTtl,
  ModalBtnEnter,
  ModalFormGroup,
} from "./singInPage.styled";
import { MessageError } from "../../Components/Common/Common.styled";
import { loginInApp } from "../../../api";
import { useState } from "react";
import { UserHook } from "../../hooks/useUserHook";

export default function SingInPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [wrongUserData, setWrongUserData] = useState(null);
  const [userInput, setUserInput] = useState({
    login: "",
    password: "",
  });

  const { setUser } = UserHook();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!userInput.login || !userInput.password) {
        setErrorMessage(true);
        setWrongUserData(true);
        return;
      }
      const userData = await loginInApp({
        login: userInput.login,
        password: userInput.password,
      });
      await localStorage.setItem("user", JSON.stringify(userData));
      await localStorage.setItem("token", userData.token);
      await setUser(localStorage.user);

      navigate(AppRoutes.HOME);
    } catch (error) {
      setWrongUserData(true);
    } finally {
      setTimeout(() => {
        setErrorMessage(null);
        setWrongUserData(null);
      }, 3000);
    }
  };

  return (
    <Wrapper>
      <ContainerSignIn>
        <Modal>
          <ModalBlock>
            <ModalTtl>
              <h2>Вход</h2>
            </ModalTtl>
            <ModalFormLogin
              onSubmit={handleLoginSubmit}
              id="formLogIn"
              action="#"
            >
              <ModalInput
                $wrongUserData={wrongUserData}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                onChange={(e) =>
                  setUserInput({ ...userInput, login: e.target.value })
                }
              />
              <ModalInput
                $wrongUserData={wrongUserData}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
              <MessageError style={{ color: "red" }}>
                {errorMessage || wrongUserData
                  ? "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
                  : ""}
              </MessageError>
              <ModalBtnEnter
                disabled={wrongUserData}
                $wrongUserData={wrongUserData}
                type="submit"
                id="btnEnter"
              >
                Войти
              </ModalBtnEnter>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.SINGUP}>Регистрируйтесь здесь</Link>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSignIn>
    </Wrapper>
  );
}
