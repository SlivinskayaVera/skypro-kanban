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
import { editTasks, getTasks } from "../../../api.js";
import { UserHook } from "../../hooks/useUserHook.js";
import { TaskHook } from "../../hooks/useTaskHook.js";
import LoadingCards from "../LoadingPagesForHomePage/LoadingCards.jsx";
import LoadingCardsError from "../LoadingPagesForHomePage/LoadingCardsError.jsx";
import { ThemeHook } from "../../hooks/useThemeHook.js";
import { DragDropContext } from "react-beautiful-dnd";

export default function MainContent() {
  const { cards } = useContext(TasksContext);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  const { user } = UserHook();
  const { setCards } = TaskHook();

  useEffect(() => {
    getTasks({ setCards }).catch(() => {
      setErrorMessage(true);
    });
  }, [user, setCards]);

  const { changeTheme } = ThemeHook();

  const onDragEnd = async (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    setIsLoading(true);

    const editCard = cards.find((card) => card._id === draggableId);

    await editTasks({
      setCards,
      id: draggableId,
      token: JSON.parse(user).token,
      newDataTask: { ...editCard, status: destination.droppableId },
    });
    setIsLoading(false);

  };

  return (
    <Main $changeTheme={changeTheme}>
      {errorMessage ? (
        <LoadingCardsError />
      ) : (
        <Container>
          <MainBlock>
            <Outlet />
            {!cards || isLoading ? (
              <LoadingCards />
            ) : (
              <MainContentWrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                  {statusList.map((status) => (
                    <Column
                      key={status}
                      columnId={status}
                      title={status}
                      cardList={cards.filter((card) => card.status === status)}
                    />
                  ))}
                </DragDropContext>
              </MainContentWrapper>
            )}
          </MainBlock>
        </Container>
      )}
    </Main>
  );
}
