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

export default function SingInPage({setIsAuth}) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [wrongUserData, setWrongUserData] = useState(null);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const handlerLoginInApp = async (event) => {
    event.preventDefault();

    try {
      if (!user.login || !user.password) {
        setErrorMessage(true);
        return;
      }
      const userData = await loginInApp({
        login: user.login,
        password: user.password,
      });

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
                placeholder="Эл. почта"
                onChange={(e) => setUser({ ...user, login: e.target.value })}
              />
              <ModalInput
                $wrongUserData={wrongUserData}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                {/* onClick={getIsAuth} */}
                {/* <Link to={AppRoutes.HOME}>Войти</Link> */}
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
