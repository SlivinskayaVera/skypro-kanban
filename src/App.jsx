import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./Components/Pops/PopExit.jsx";
import PopNewCard from "./Components/Pops/PopNewCard.jsx";
import PopBrowse from "./Components/Pops/PopBrowse.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <PageWrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
    </PageWrapper>
  );
}

export default App;
