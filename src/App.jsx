import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./pages/ExitPage/PopExit";
import PopNewCard from "./Components/Pops/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./pages/BrowseCardPage/PopBrowsePage.jsx";
import MainContent from "./pages/HomePage/HomePage";
import Header from "./Components/Header/Header.jsx";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./Components/Common/GlobalStyle";
import { AppRoutes } from "./pages/appRoutes";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/NotFoundPage/Error404.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import SingInPage from "./pages/SingInPage/SingInPage";
import SingUpPage from "./pages/SingUpPage/SingUpPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { getTasks } from "../api";

function App() {
  const [cards, setCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!isAuth) return;
    getTasks({ setCards }).catch(() => {
      setErrorMessage(true);
    });
  }, [isAuth]);

  return (
    <PageWrapper>
      <GlobalStyle />
      <PopNewCard />
      <Header setCards={setCards} />
      <p>
        {errorMessage ? "Не удалось загрузить данные, попробуйте позже" : ""}
      </p>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route element={<PrivateRoute isAuth={isAuth} />}>
            <Route
              path={AppRoutes.HOME}
              element={<MainContent cards={cards} />}
            />
            <Route
              path={AppRoutes.EXIT}
              element={<PopExit setIsAuth={setIsAuth} />}
            />
            <Route path={AppRoutes.CARD} element={<PopBrowse />} />
          </Route>

          <Route
            path={AppRoutes.SIGNIN}
            element={<SingInPage setIsAuth={setIsAuth} />}
          />
          <Route path={AppRoutes.SINGUP} element={<SingUpPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<Error404 />} />
        </Routes>
      )}
    </PageWrapper>
  );
}

export default App;
