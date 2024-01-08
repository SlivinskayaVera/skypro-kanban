import Column from "../Columns/Column.jsx";
import { statusList } from "../../../data.js";
import { Container } from "../Common/Common.styled.js";
import { Main, MainBlock, MainContent } from "./MainContentWrapper.styled.js";

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
    </Main>
  );
}
