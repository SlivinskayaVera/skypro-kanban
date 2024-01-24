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
            key={card._id}
            id={card._id}
            theme={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
