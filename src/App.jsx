import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./pages/ExitPage/PopExit";
import PopNewCard from "./pages/PopNewCardPage/PopNewCardPage.jsx";
import PopBrowse from "./pages/BrowseCardPage/PopBrowsePage.jsx";
import MainContent from "./pages/HomePage/HomePage";
import { GlobalStyle } from "./Components/Common/GlobalStyle";
import { AppRoutes } from "./pages/appRoutes";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/NotFoundPage/Error404.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import SingInPage from "./pages/SingInPage/SingInPage";
import SingUpPage from "./pages/SingUpPage/SingUpPage";
import EditTaskPage from "./pages/EditTaskPage/EditTaskPage";

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />

        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoutes.HOME} element={<MainContent />}>
              <Route path={AppRoutes.NEW_CARD} element={<PopNewCard />} />
              <Route path={AppRoutes.EXIT} element={<PopExit />} />
              <Route path={AppRoutes.CARD} element={<PopBrowse />} />
              <Route path={AppRoutes.EDIT_CARD} element={<EditTaskPage />} />

            </Route>
          </Route>

          <Route path={AppRoutes.SIGNIN} element={<SingInPage />} />
          <Route path={AppRoutes.SINGUP} element={<SingUpPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<Error404 />} />
        </Routes>
    </PageWrapper>
  );
}

export default App;
