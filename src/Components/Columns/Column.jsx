import CardTask from "../Cards/CardTask.jsx";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";

export default function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <CardTask
            key={card.id}
            colorTheme={card.colorTheme}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
