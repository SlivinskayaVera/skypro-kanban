import { Main } from "../../Components/Wrappers/MainContent.styled.js";
import Column from "../../Components/Columns/Column.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../../Components/Common/Common.styled.js";
import {
  MainBlock,
  MainContentWrapper,
} from "../../Components/Wrappers/MainContent.styled.js";
import { useContext } from "react";
import { TasksContext } from "../../contexts/tasksContext.jsx";
import { Outlet } from "react-router-dom";

export default function MainContent() {
  const { cards } = useContext(TasksContext);

  return (
    <Main>
      <Container>
        <MainBlock>
          <Outlet />
          <MainContentWrapper>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContentWrapper>
        </MainBlock>
      </Container>
    </Main>
  );
}
