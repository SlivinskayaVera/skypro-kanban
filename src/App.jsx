import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./pages/ExitPage/PopExit";
import PopNewCard from "./Components/Pops/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./pages/BrowseCardPage/PopBrowsePage.jsx";
import MainContent from "./pages/HomePage/HomePage";
import Header from "./Components/Header/Header.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../data";
import { GlobalStyle } from "./Components/Common/GlobalStyle";
import { AppRoutes } from "./pages/appRoutes";
import { Routes, Route, useNavigate } from "react-router-dom";
import Error404 from "./pages/NotFoundPage/Error404.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import SingInPage from "./pages/SingInPage/SingInPage";
import SingUpPage from "./pages/SingUpPage/SingUpPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { getTasks } from "../api";

function App() {
  const navigate = useNavigate();
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function getIsAuth() {
    setIsAuth(localStorage.token);
    navigate(AppRoutes.HOME);
  }

  useEffect(() => {
    try {
      isAuth && getTasks({ setCards });
    } catch (error) {
      console.log('sdsd');
    }
  }, [isAuth]);

  function exit() {
    localStorage.clear();
    setIsAuth(false);
  }

  return (
    <PageWrapper>
      <GlobalStyle />
      <PopNewCard />
      <Header setCards={setCards} />
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route element={<PrivateRoute isAuth={isAuth} />}>
            <Route
              path={AppRoutes.HOME}
              element={<MainContent cards={cards} />}
            />
            <Route path={AppRoutes.EXIT} element={<PopExit exit={exit} />} />
            <Route path={AppRoutes.CARD} element={<PopBrowse />} />
          </Route>

          <Route
            path={AppRoutes.SIGNIN}
            element={<SingInPage getIsAuth={getIsAuth} />}
          />
          <Route path={AppRoutes.SINGUP} element={<SingUpPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<Error404 />} />
        </Routes>
      )}
    </PageWrapper>
  );
}

export default App;
