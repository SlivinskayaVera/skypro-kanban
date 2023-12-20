import "./App.css";
import PageWrapper from "./Components/Wrappers/PageWrapper.jsx";
import PopExit from "./Components/Pops/PopExit.jsx";
import PopNewCard from "./Components/Pops/PopNewCard.jsx";
import PopBrowse from "./Components/Pops/PopBrowse.jsx";
import MainContentWrapper from "./Components/Wrappers/MainContantWrapper";
import Header from "./Components/Header/Header.jsx";
import { useState, useEffect } from "react";
import { cardList } from "../data";

function App() {
  const [cards, setCards] = useState(cardList);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!IsLoading);
    }, 1000);
  }, []);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
      colorTheme: "_orange",
    };
    setCards([...cards, newCard]);
  }

  return (
    <PageWrapper>
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} />
      {IsLoading ? (
        <h1>Downloading, wait...</h1>
      ) : (
        <MainContentWrapper cards={cards} />
      )}
    </PageWrapper>
  );
}

export default App;
