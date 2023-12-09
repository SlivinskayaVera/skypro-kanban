import "./App.css";
import Wrapper from './Components/Wrapper.jsx';
import PopExit from './Components/Pops/PopExit.jsx';
import PopNewCard from "./Components/Pops/PopNewCard.jsx";
import PopBrowse from "./Components/Pops/PopBrowse.jsx";
import Header from "./Components/Header.jsx";


function App() {

  return (      
    <Wrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
    </Wrapper>
  );
}

export default App;
