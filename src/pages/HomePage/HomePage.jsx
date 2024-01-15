import { Main } from "../../Components/Wrappers/MainContentWrapper.styled.js";
import { Outlet } from "react-router-dom";
import Column from "../../Components/Columns/Column.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../../Components/Common/Common.styled.js";
import {
  MainBlock,
  MainContent,
} from "../../Components/Wrappers/MainContentWrapper.styled.js";

export default function MainContentWrapper({ cards }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
      <Outlet />
    </Main>
  );
}
