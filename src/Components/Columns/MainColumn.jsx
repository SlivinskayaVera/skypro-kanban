import CardTask from "../Cards/CardTask.jsx";

export default function MainColumn({ title, cardList }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => (
          <CardTask
            key={card.id}
            colorTheme={card.colorTheme}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
