import { Main } from "../../Components/Wrappers/MainContent.styled.js";
import Column from "../../Components/Columns/Column.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../../Components/Common/Common.styled.js";
import {
  MainBlock,
  MainContentWrapper,
} from "../../Components/Wrappers/MainContent.styled.js";
import LoadingCards from "../LoadingPagesForHomePage/LoadingCards.jsx";

export default function MainContent({ cards }) {
  return (
    <Main>
      <Container>
        <MainBlock>
          {cards ? (<MainContentWrapper>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </MainContentWrapper>) : (<LoadingCards />)}
        </MainBlock>
      </Container>
    </Main>
  );
}
