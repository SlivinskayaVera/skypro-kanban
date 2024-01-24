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
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export default function SingInPage() {
  const { setIsAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [wrongUserData, setWrongUserData] = useState(null);
  const [userInput, setUserInput] = useState({
    login: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const handlerLoginInApp = async (event) => {
    event.preventDefault();

    try {
      if (!userInput.login || !userInput.password) {
        setErrorMessage(true);
        return;
      }
      const userData = await loginInApp({
        login: userInput.login,
        password: userInput.password,
      });

      await localStorage.setItem("user", JSON.stringify(userData));
      await setUser(JSON.parse(localStorage.user));
      localStorage.userName = userData.name;
      localStorage.token = userData.token;
      localStorage.userLogin = userData.login;

      setIsAuth(localStorage.token);
      navigate(AppRoutes.HOME);
    } catch (error) {
      setWrongUserData(true);
    } finally {
      setTimeout(() => setWrongUserData(null), 3000);
      setTimeout(() => setErrorMessage(null), 3000);
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
              onSubmit={handlerLoginInApp}
              id="formLogIn"
              action="#"
            >
              <ModalInput
                $wrongUserData={wrongUserData}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
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
