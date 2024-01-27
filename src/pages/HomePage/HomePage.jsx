import { Main } from "../../Components/Wrappers/MainContent.styled.js";
import Column from "../../Components/Columns/Column.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../../Components/Common/Common.styled.js";
import {
  MainBlock,
  MainContentWrapper,
} from "../../Components/Wrappers/MainContent.styled.js";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../contexts/tasksContext.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../../api.js";
import { UserHook } from "../../hooks/useUserHook.js";
import { TaskHook } from "../../hooks/useTaskHook.js";
import LoadingCards from "../LoadingPagesForHomePage/LoadingCards.jsx";
import LoadingCardsError from "../LoadingPagesForHomePage/LoadingCardsError.jsx";

export default function MainContent() {
  const { cards } = useContext(TasksContext);

  const [errorMessage, setErrorMessage] = useState(false);
  const { user } = UserHook();
  const { setCards } = TaskHook();

  useEffect(() => {
    getTasks({ setCards }).catch(() => {
      setErrorMessage(true);
    });
  }, [user, setCards]);

  return (
    <Main>
        {errorMessage
          ? (<LoadingCardsError />)
          : (<Container>
            <MainBlock>
              <Outlet />
              {!cards ? (<LoadingCards />) : (
                <MainContentWrapper>
                  {statusList.map((status) => (
                    <Column
                      key={status}
                      title={status}
                      cardList={cards.filter((card) => card.status === status)}
                    />
                  ))}
                </MainContentWrapper>
              )}
            </MainBlock>
          </Container>)}
    </Main>
  );


}
