import { useEffect, useState } from "react";
import CardTask from "../Cards/CardTask.jsx";
import { MainColumn, ColumnTitle, Cards } from "./Column.styled.js";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ title, cardList, columnId }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Cards>
              {cardList.map((card, index) => (
                <CardTask
                  key={card._id}
                  id={card._id}
                  theme={card.topic}
                  title={card.title}
                  date={card.date}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Cards>
          </div>
        )}
      </Droppable>
    </MainColumn>
  );
}
